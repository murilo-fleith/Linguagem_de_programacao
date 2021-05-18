import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from './firebase';

export default function Index({ navigation }) {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [listFire, setListFire] = useState('');


  useEffect(() => {
    try {
      firebase.database().ref('/crud').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            quantidade: childItem.val().quantidade,
            produto: childItem.val().produto,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.database().ref('/crud/' + key).remove()
  }

  function createFire() {
    try {
      firebase.database().ref('/crud').push({
        produto: produto,
        quantidade: quantidade
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setQuantidade('');
      setProduto('');
    }
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Produto: {item.produto} </Text>
            <Text style={styles.text}> quantidade: {item.quantidade}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.textRemover}>Remover</Text>
            </TouchableOpacity>
        
          </View>
      } />
      <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textHome}>Home</Text>
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  textHome:{
    color: '#0000FF'
  },
  textRemover:{
    color:"#FF0000"
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 60,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#FF0000',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  viewFlat: {
    maxHeight: 410,
  },
  btnHome:{
    margin: 10,
    borderWidth: 3,
    borderColor: '#0000FF',
    width:150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
import React from 'react';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View,Button, TextInput,TextInputBase, TouchableOpacity,FlatList} from 'react-native';
import { color } from 'react-native-reanimated';

import firebase from "./firebase"

export default function CadastroScreen({navigation}){
  const [produto, setProduto] = useState('');
  const [quantidade , setQuantidade] = useState('');
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

  function pushFirebase({navigation}){
    try{
      firebase.database().ref('/crud').push({
        produto: produto,
        quantidade : quantidade,
        
      })
    } catch (error){
      alert(error)
    }
    finally{
      setProduto('');
      setQuantidade('');
          
      
    }
  }
  function goHome() {
    navigation.navigate("Home")    
  }
  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Produto: {item.produto} </Text>
            <Text style={styles.text}> Quantidade: {item.quantidade}</Text>
          </View>

        } />

      <TextInput  style={styles.textInput} 
        onChangeText= {produto => setProduto(produto)} value={produto}
        placeholder = "Produto:"/>
        <TextInput style={styles.textInput}
          onChangeText= {quantidade => setQuantidade(quantidade)} value={quantidade}
          placeholder = "Quantidade"/>

      <TouchableOpacity style={styles.btnEnviar} onPress={pushFirebase}>
        <Text style={styles.textCadastrar}>Cadastrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textHome}>Home</Text>
      </TouchableOpacity>

      

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color : "#fff"
  },
  textHome:{
    color: '#0000FF'
  },
  textCadastrar:{
    color: "#00FF00"
  },
  textInput:{
    width: 300,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  btnEnviar:{
    margin: 10,
    borderWidth: 3,
    borderColor: '#00FF00',
    width:150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
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
  viewFlat: {
    maxHeight: 410,
    borderColor: '#00FF00',
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});

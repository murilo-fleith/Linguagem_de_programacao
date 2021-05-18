import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput } from 'react-native';
import firebase from './firebase';


export default function Update( {navigation}) {
    const [produto, setProdudo] = useState(navigation.getParam('produto'));
    const [quantidade, setQuantidade] = useState(navigation.getParam('quantidade'));

   
  function upDateFire() {
    try {
        firebase.database().ref('/crud/'+navigation.getParam('key')).update({
            produto: produto,
            quantidade : quantidade,
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setQuantidade('');
      setProdudo('');
      alert('Sucesso');
      navigation.navigate("Home")
    }
  }

    return (
        <View style={styles.container}>
            <View style={styles.viewCenter}>

                <Text style={styles.text}>Produto</Text>
                <TextInput style={styles.textInput} onChangeText={produto => setProdudo(produto)} value={produto} />

                <Text style={styles.text}>Quantidade</Text>
                <TextInput style={styles.textInput} onChangeText={quantidade => setQuantidade(quantidade)} value={quantidade} />

                <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
                    <Text style={styles.textUpdate}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textHome}>Home</Text>
                </TouchableOpacity>

            </View>
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
    viewCenter: {
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
    textUpdate:{
        color:"#FA5700",
    },
    btnEnviar: {
        margin: 10,
        borderWidth: 3,
        borderColor: "#FA5700",
        width:150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    },
    btnHome:{
        margin: 10,
        borderWidth: 3,
        borderColor: '#0000FF',
        width:150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      }
});
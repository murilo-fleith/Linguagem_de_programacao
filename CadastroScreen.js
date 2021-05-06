import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput,TextInputBase, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

import firebase from "./firebase"

export default function CadastroScreen(){
  const [name , setName] = useState('');
  const [idade , setIdade] = useState('');

  function pushFirebase(){
    try{
      firebase.database().ref('/crud').push({
        name: name,
        idade : idade
      })
    } catch (error){
      alert(error)
    }
    finally{
      setName('');
      setIdade('');
      alert('Cadastro Realizado Com Sucesso');
    }
  }
  return (
     <View style={styles.container}>
        <TextInput  style={styles.textInput} 
        onChangeText= {name => setName(name)} value={name}
        placeholder = "Seu Nome:"/>
        
        <TextInput style={styles.textInput}
          onChangeText= {idade => setIdade(idade)} value={idade}
          placeholder = "Sua Idade"/>
       
       <TouchableOpacity style={styles.btnEnviar} onPress
       ={pushFirebase}>
         <Text style={styles.text}>
          Cadastrar
         </Text>
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
    borderWidth: 1,
    borderColor: '#fff',
    width:150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

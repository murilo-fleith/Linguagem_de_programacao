import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput,TextInputBase, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

import firebase from "./firebase"

export default function CadastroScreen(){
  const [produto, setProduto] = useState('');
  const [quantidade , setQuantidade] = useState('');
  
  function pushFirebase(){
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
      alert('Cadastro Realizado Com Sucesso');
    }
  }
  return (
     <View style={styles.container}>
        <TextInput  style={styles.textInput} 
        onChangeText= {produto => setProduto(produto)} value={produto}
        placeholder = "Produto:"/>
        
        <TextInput style={styles.textInput}
          onChangeText= {quantidade => setQuantidade(quantidade)} value={quantidade}
          placeholder = "Quantidade"/>


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
    borderWidth: 3,
    borderColor: '#00FF00',
    width:150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebase';


export default function Update( {navigation}) {
    const [produto, setProdudo] = useState(navigation.getParam('produto'));
    const [quantidade, setQuantidade] = useState(navigation.getParam('quantidade'));

   
  function upDateFire() {
    try {
        firebase.database().ref('/crud'+navigation.getParam('key')).update({
        produto: produto,
        quantidade: quantidade
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setQuantidade('');
      setProdudo('');
      //navigation.navigate("Index")
      alert('Sucesso')
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
                    <Text style={styles.text}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Index")}>
                    <Text style={styles.text}>Cancel</Text>
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
    btnEnviar: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    },
});
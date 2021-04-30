import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>


        <TouchableOpacity style={styles.alterar} >
        <Button
        justifyContent= 'center'
        alignItems= 'center'
        color ="#FA5700"
        title = "Alterar"
        onPress={() => this.props.navigation.navigate('Alterar')}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadastar}>
        <Button
        justifyContent= 'center'
        alignItems = 'center'
        color= "#00FF00"
        borderRadius= '2' 
        title = "Cadastrar"
        onPress={() => this.props.navigation.navigate('Cadastro')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletar}>
        <Button
        justifyContent= 'center'
        alignItems= 'center'
        color= "#FF0000" 
        title = "Deletar"
        onPress={() => this.props.navigation.navigate('Delete')}
        />
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.pesquisar}>
        <Button
        justifyContent= 'center'
        alignItems= 'center'
        color= "#2935B9" 
        title = "Pesquisar"
        onPress={() => this.props.navigation.navigate('Pesquisa')}

        />
        </TouchableOpacity>
      </View>
    );
  }
}

// ...
// Friend
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#000000"
  },
  title:{
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    color: '#DCDCDC'
  },
  cadastar:{
    backgroundColor: "#00FF00",
    margin: 15,
    padding: 1,
    color: "#000000",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center' 
  },

  alterar:{
    backgroundColor: "#FA5700",
    margin: 15,
    marginTop: 90,
    padding: 1,
    color: "#000000",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
       
  },
  deletar:{
    backgroundColor: "#FF0000",
    margin: 15,
    padding: 1,
    color : "#000000",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pesquisar:{
    backgroundColor: "#2935B9",
    margin: 15,
    padding: 1,
    color : "#000000",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
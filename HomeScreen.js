import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cadastar}>
        <Button 
        title = "Cadastrar"
        onPress={() => this.props.navigation.navigate('Cadastro')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.alterar}>
        <Button 
        title = "Alterar"
        onPress={() => this.props.navigation.navigate('Alterar')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletar}>
        <Button 
        title = "Deletar"
        onPress={() => this.props.navigation.navigate('Delete')}
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
    marginTop: 90,
    padding: 1,
    color: "#000000",
    borderRadius: 20
  },
  alterar:{
    backgroundColor: "#DDDDDD",
    margin: 15,
    padding: 1,
    color: "#000000",
    borderRadius: 20
  },
  deletar:{
    backgroundColor: "#FF0000",
    margin: 15,
    padding: 1,
    color : "#000000",
    borderRadius: 20
  },
});
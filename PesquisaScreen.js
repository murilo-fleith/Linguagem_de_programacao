import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class CadastroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pesquisa Screen </Text>
        
      </View>
    );
  }
}


// ...
//home
export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
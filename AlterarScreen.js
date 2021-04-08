import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class AlterarScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AlterarScreen</Text>
        
      </View>
    );
  }
}


export default AlterarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
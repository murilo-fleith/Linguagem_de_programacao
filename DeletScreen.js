import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class DeletScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeletScreen</Text>
        
      </View>
    );
  }
}


export default DeletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

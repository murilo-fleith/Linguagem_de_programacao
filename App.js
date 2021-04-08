import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import CadastroScreen from './CadastroScreen'
import DeletScreen from './DeletScreen';
import AlterarScreen from './AlterarScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen 
              name="Inicio"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Cadastro"
              component={CadastroScreen}
            />
            <Stack.Screen
              name="Delete"
              component={DeletScreen}
            />
            <Stack.Screen 
              name="Alterar"  
              component={AlterarScreen} 
            />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    marginTop: 200,
    fontSize: 30,
    color: '#DCDCDC',
    backgroundColor: '#fff'
  },
});

export default App;


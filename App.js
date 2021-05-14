import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import CadastroScreen from './CadastroScreen'
import DeletScreen from './DeletScreen';
import AlterarScreen from './AlterarScreen';
import PesquisaScreen from './PesquisaScreen';
import Edit from './Edit';



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen
            options={{
            headerShown: false
            }}
              name="Inicio"
              component={HomeScreen}
            />
            <Stack.Screen
            options={{
              //headerShown: false
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor:'#000000'}
              }}
              name="Cadastro"
              component={CadastroScreen}
            />
            <Stack.Screen
            options={{
                headerTitleAlign: 'center',
                headerTintColor: 'red',
                headerStyle: { backgroundColor:'#000000'}
              }}            
              name="Delete"
              component={DeletScreen}
            />
            <Stack.Screen 
            options={{
              //headerShown: false
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor:'#000000'}
              }}             
             name="Alterar"  
              component={AlterarScreen} 
            />
            <Stack.Screen
            options={{
              //headerShown: false
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor:'#000000'}
              }}
              name="Pesquisa"
              component={PesquisaScreen}
              />
            <Stack.Screen
            options={{
              //headerShown: false
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor:'#000000'}
              }}
              name="Edit"
              component={Edit}
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
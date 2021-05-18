import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import CadastroScreen from './CadastroScreen'
import DeletScreen from './DeletScreen';
import AlterarScreen from './AlterarScreen';
import PesquisaScreen from './PesquisaScreen';
import Edit from './Edit';





const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Alterar: AlterarScreen,
  Pesquisa: PesquisaScreen,
  Cadastro: CadastroScreen,
  Delete: DeletScreen,
  Edit: Edit
},
{
  initialRouteName: 'Home',
}
)

export default createAppContainer(AppNavigator);


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


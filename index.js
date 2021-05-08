import { registerRootComponent } from 'expo';

import App from './App';
import HomeScreen from './HomeScreen';
import CadastroScreen from './CadastroScreen'
import DeletScreen from './DeletScreen';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
//registerRootComponent(App);
registerRootComponent(App)
//registerRootComponent(CadastroScreen);
//registerRootComponent(DeletScreen);
//registerRootComponent(HomeScreen);
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

__DEV__ && (console.disableYellowBox = true)

AppRegistry.registerComponent(appName, () => App);

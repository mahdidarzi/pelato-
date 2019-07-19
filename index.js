/** @format */

import {AppRegistry} from 'react-native';
import App from './src/pages/App';
import {name as appName} from './app.json';
// use of tricks sometimes
// console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);

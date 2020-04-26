import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

require('react-native').unstable_enableLogBox();
const App = require('./src/index');

AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// const App = require('./src');
// require('react-native').unstable_enableLogBox();
import App from '.';

AppRegistry.registerComponent(appName, () => App);

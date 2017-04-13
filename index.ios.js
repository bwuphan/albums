//Place code in here for IOS!!!!

//import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () =>
  <Text>Some Text</Text>;

//render it to a device
AppRegistry.registerComponent('albums', () => App);


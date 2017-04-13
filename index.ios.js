//Place code in here for IOS!!!!

//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


//create a component
const App = () =>
  <Header></Header>;

//render it to a device
AppRegistry.registerComponent('albums', () => App);


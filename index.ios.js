/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyApp from './src/component/MyApp';

export default class helloWorld extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}



AppRegistry.registerComponent('helloWorld', () => helloWorld);

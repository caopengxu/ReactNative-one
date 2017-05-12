/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import LoginView from './login';

export default class myOne extends Component {
  render() {
    return (
      <LoginView />
    );
  }
}

AppRegistry.registerComponent('myOne', () => myOne);

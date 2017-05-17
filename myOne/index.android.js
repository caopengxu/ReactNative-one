

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import BothMain from './APP/BothMain'

export default class myOne extends Component {
  render() {
    return (
      <BothMain/>
    );
  }
}

AppRegistry.registerComponent('myOne', () => myOne);

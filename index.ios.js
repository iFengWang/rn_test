/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
// import HomePage from './compontents/homePage';
// import ImPage from './compontents/imPage';
import XSYRouter from './router';

// import Logger from './middlewares/logger';
// Logger('vvvvvv');

import XsyText from './compontents/xsyText/components/xsyText';

class App extends Component {
  render() {
    return (
      <XsyText title='我是标题' value='我是内容' layout='V' />
    );
  }
}

AppRegistry.registerComponent('rn_test', () => App);

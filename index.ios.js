/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import XSYRouter from './router';

// import Logger from './middlewares/logger';
// Logger('vvvvvv');

AppRegistry.registerComponent('rn_test', () => XSYRouter);

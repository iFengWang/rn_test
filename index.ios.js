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

import XSYHomePage from './compontents/homePage'

AppRegistry.registerComponent('rn_test', () => XSYRouter);


//**************************** */
function mpSort(ary) {
  let temp;
  for(i=0; i<ary.length-1; i++) {
    for(j=i+1; j<ary.length; j++) {
      if(ary[i]>ary[j]) {
        temp = ary[i];
        ary[i] = ary[j];
        ary[j] = temp;
      }
    }
  }
  return ary;
}

function quictSort(ary,i,j) {
  let low = i, high = j;
}

let array = [3,2,6,1,7,4];
console.log('1.....',mpSort(array));
// quictSort(ary, 0, ary.length-1);
//**************************** */
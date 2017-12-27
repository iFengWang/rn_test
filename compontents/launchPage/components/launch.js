import React, { Component } from 'react';
import {
  Animated,
  Dimensions
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

let screen = Dimensions.get('window');

class LaunchPage extends Component {
  render() {
    return (
        <Animated.Image source={require('../images/launch.png')} style={{width:screen.width, height:screen.height}} resizeMode="stretch" >
        </Animated.Image>
    );
  }

  componentDidMount() {
    let timer = setTimeout(function(){
      Actions.login({type:ActionConst.REPLACE});
      clearTimeout(timer);
    },2000);
  }
}

export default LaunchPage;
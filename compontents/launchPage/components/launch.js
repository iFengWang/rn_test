import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

let screen = Dimensions.get('window');

class BasePage extends Component {
  constructor(props) {
    super(props);
    this.state = { val:1 };
  }

  delay() {
    let timer = setTimeout(function(){
      Actions.login({type:ActionConst.REPLACE});
      clearTimeout(timer);
    },1000);
  }

  show() {
    alert(this.state.val);
  }
}

class LaunchPage extends BasePage {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.delay();
  }

  change() {
    this.setState({val:2});
  }

  render() {
    return (
        <Animated.Image source={require('../images/launch.png')} style={{width:screen.width, height:screen.height,padding:50}} resizeMode="stretch">
          {/* <TouchableOpacity onPress={this.change} 
          style={{margin:5, width:150, height:40, justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
            <Animated.Text>改变state</Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.show} 
          style={{margin:5, width:150, height:40, justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
            <Animated.Text>显示state</Animated.Text>
          </TouchableOpacity> */}
        </Animated.Image>
    );
  }
}

export default LaunchPage;
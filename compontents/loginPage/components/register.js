import React,{ Component } from 'react';
import {
  Animated,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

let screen = Dimensions.get('window');
let lineHeight = 40;

class Register extends Component {
  render() {
    return (
      <Animated.View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
        <TextInput 
        key='field_0' 
        placeholder='请输入您的手机号'
        maxLength={11}
        multiline={false}
        autoGrow={true}
        clearButtonMode={'while-editing'}
        style={{
          textAlign:'center',
          margin:10,
          padding:10,
          width:screen.width-20*2,
          height:lineHeight,
          borderWidth:1,
          borderColor:'red',
          alignSelf:'center',
          borderRadius:lineHeight/2}}/>

        <TextInput 
        key='field_1' 
        password={true}
        placeholder='请输入您的密码'
        maxLength={11}
        clearButtonMode={'while-editing'}
        style={{
          textAlign:'center',
          margin:10,
          padding:10,
          width:screen.width-20*2,
          height:lineHeight,
          borderWidth:1,
          borderColor:'red',
          alignSelf:'center',
          borderRadius:lineHeight/2}}/>

        <TextInput 
          key='field_1' 
          password={true}
          placeholder='请输入您的密码'
          maxLength={11}
          clearButtonMode={'while-editing'}
          style={{
            textAlign:'center',
            margin:10,
            padding:10,
            width:screen.width-20*2,
            height:lineHeight,
            borderWidth:1,
            borderColor:'red',
            alignSelf:'center',
            borderRadius:lineHeight/2}}/>

        <TouchableOpacity 
        onPress={()=> Actions.tab_main()}
        style={{
          margin:10,
          width:screen.width-20*2,
          height:lineHeight,
          backgroundColor:'red',
          borderRadius:lineHeight/2,
          justifyContent:'center',
          alignItems:'center'}}>
          <Animated.Text style={{color:'white'}}>注 册</Animated.Text>
        </TouchableOpacity>

      </Animated.View>
    );
  }
}

export default Register;
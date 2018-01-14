import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import TimerComponent from '../child/timerComponet/components/timerComponent';
let screen = Dimensions.get('window');

class oaPage extends Component {
    constructor(props) {
      super(props);
      this.deleteFun = this.deleteFun.bind(this);
      this.state = {
        items:[
          {id:'1',title:'吃',time:2},
          {id:'2',title:'喝',time:12},
          {id:'3',title:'拉',time:28},
          {id:'4',title:'撒',time:32}
        ]
      };
    }
  
    deleteFun(id) {
  
      Alert.alert(
        '温馨提示',
        '真的要删除这条数据吗？',
        [
          {text: '删除', onPress: () => {
            let i = -1;
      this.state.items.forEach((item,index)=>{
        if(item.id===id) {
          i = index;
        }
      });
  
      if (i > -1) {
        this.setState({items:this.state.items.slice(0,i).concat(this.state.items.slice(i+1))});
      }
          }},
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      );
    }
  
    render() {
      return (
        <View style={{flex:1,paddingTop:20}}>
          {
            this.state.items.map((item,index)=>{
              return <TimerComponent key={item.id} {...item} deleteFun={this.deleteFun} />
            })
          }
        </View>
      );
    }
  }

 let styles = {
     container:{
         flex:1,
         backgroundColor:'#00FF00'
     }
 };

 export default oaPage;
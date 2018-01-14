import React,{Component} from 'react';
import {
    Animated,
    Dimensions
 } from 'react-native';

 let screen = Dimensions.get('window');

 class mePage extends Component {
     render() {
        return (
            <Animated.ScrollView  style={styles.container}>
                <Animated.Image source={require('../images/banner1.png')} style={{width:screen.width,height:200}} />
                
            </Animated.ScrollView>
        );
     }
 }

 let styles = {
     container:{
         flex:1,
         backgroundColor:'#00FF00'
     }
 };

 export default mePage;
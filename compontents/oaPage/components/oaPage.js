import React,{Component} from 'react';
import {
    Animated,
    Text
 } from 'react-native';

 class oaPage extends Component {
     render() {
        return (
            <Animated.ScrollView  style={styles.container}>
                <Text>CRM</Text>
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

 export default oaPage;
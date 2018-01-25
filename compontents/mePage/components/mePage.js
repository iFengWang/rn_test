import React,{Component} from 'react';
import {
    Animated,
    Dimensions
 } from 'react-native';
 import { MKButton, MKColor } from 'react-native-material-kit';

 let screen = Dimensions.get('window');

 const PlainRaisedButton = MKButton.button()
    .withText('按钮1')
    .withStyle({marginTop:10,marginBottom:5,marginLeft:5,marginRight:5, color:'#FF0000'})
    .build();

 const ColoredRaisedButton = MKButton.coloredButton()
    .withText('BUTTON')
    .withStyle({margin:5})
    .withOnPress(() => {
    alert('ssssssss');
    }).build();

const AccentColoredRaisedButton = MKButton.accentColoredButton()
    .withStyle({margin:5})
    .withText('BUTTON')
    .build();

const FlatButton = MKButton.flatButton()
    .withText('BUTTON')
    .withStyle({margin:5})
    .build();

const ColoredFlatButton = MKButton.coloredFlatButton()
    .withText('BUTTON')
    .withStyle({margin:5})
    .build();

const AccentColoredFlatButton = MKButton.accentColoredFlatButton()
    .withText('BUTTON')
    .withStyle({margin:5})
    .build();

const ColoredFab = MKButton.coloredFab()
    .withStyle({margin:5})
    .build();

const AccentColoredFab = MKButton.accentColoredFab()
    .withStyle({margin:5})
    .build();

const PlainFab = MKButton.plainFab()
    .withStyle({margin:5})
    .build();

const CustomButton = new MKButton.Builder()
    .withBackgroundColor(MKColor.Teal)
    // .withShadowRadius(2)
    // .withShadowOffset({width:0, height:2})
    // .withShadowOpacity(.7)
    // .withShadowColor('black')
    .withOnPress(() => {
      console.log('hi, raised button!');
    })
    .withTextStyle({
      color: 'white',
      fontWeight: 'bold',
    })
    .withText('RAISED BUTTON')
    .build();

 class mePage extends Component {
     render() {
        return (
            <Animated.ScrollView  style={styles.container}>
                <Animated.Image source={require('../images/banner1.png')} style={{width:screen.width,height:200}} />

                <PlainRaisedButton />
                <ColoredRaisedButton />
                <AccentColoredRaisedButton />
                
                <FlatButton />
                <ColoredFab />
                <AccentColoredFab />
                <PlainFab />

                <CustomButton />

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
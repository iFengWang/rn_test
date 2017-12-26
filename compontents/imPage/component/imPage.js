import React,{Component} from 'react';
import {
    Animated,
    LayoutAnimation,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Dimensions,
    Easing,
    PanResponder,
    ScrollView,
    Image
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import Immutable,{Map,List,Set} from 'immutable';
import Cursor from '../../../node_modules/immutable/contrib/cursor';
import TwoPage from './twoPage';
import SvgPage from './svgPage';
import TestPage from './testPage';

let screen = Dimensions.get('window');

class imPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            w:200,
            h:100,
            ov:new Animated.Value(1),
            bounceValue:new Animated.Value(1),
            transY:new Animated.Value(100),
            postion:new Animated.ValueXY({x:20,y:100}),
            eventValue:new Animated.Value(1.0)
        }
    }

    componentWillMount() {

        // alert('impage.........'+JSON.stringify(this.props.full));

        // let one = Immutable.fromJS({a:{b:1}});
        // let two = one.ç(['a','b'],2);
        // console.log('one........',one.getIn(['a','b']));
        // console.log('two........',two.getIn(['a','b']));

        // let a = Map({
        //     name:'xiaofeng',
        //     address:{city:'beijing',zone:'chaoyang'}
        // });
        // let b = a.set('name','shanghai');
        // console.log('a.....',a.toJS());
        // console.log('b.....',b.get('address'));

        // let a = Immutable.fromJS({a:{b:{c:1}}});
        // let cursor = Cursor.from(a,['a','b'], newData => {
        //     console.log('aaa.....',newData.toJS());
        // });
        // cursor = cursor.update('c', x => x + 1);
        // cursor.get('c');

        // alert(Platform.OS);
    }

    render() {
        return (
            <Animated.View style={styles.container}>
                <View style={{width:screen.width,height:100,backgroundColor:'pink'}}>
                    <Text key='000' style={{lineHeight:50}}>IM首页</Text>
                    {Object.keys(this.props.state).map(key => <Text key={key+''}>{this.props.state[key+''].name}</Text>)}
                </View>

                <Animated.View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity 
                        style={{margin:2,width:100,height:40,backgroundColor:'brown',justifyContent:'center',alignItems:'center'}}
                        onPress={ () => Actions.tab_main()}>
                            <Text>切换Tab</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{margin:2,width:100,height:40,backgroundColor:'brown',justifyContent:'center',alignItems:'center'}}
                        onPress={ () => Actions.home_two()}>
                            <Text>同Tab内push</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        style={{margin:2,width:100,height:40,backgroundColor:'brown',justifyContent:'center',alignItems:'center'}}
                        onPress={ () => Actions.login()}>
                            <Text>Modal</Text>
                    </TouchableOpacity>
                </Animated.View>

                <TwoPage />
                <SvgPage active={false} />
                <TestPage {...this.props} />

                {/* <Animated.View ref='dongView' 
                style={{
                    width: this.state.w, 
                    height: this.state.h, 
                    backgroundColor:'red', 
                    opacity:this.state.ov,
                    transform: [
                        {scale: this.state.bounceValue},
                        {translateX : this.state.postion.x},
                        {translateY : this.state.postion.x}
                        ]}}>
                    <TouchableOpacity style={{width:100,height:40,backgroundColor:'green',margin:5}} onPress={() => this._onPress()}>
                        <Text>点击</Text>
                    </TouchableOpacity>
                </Animated.View> */}

                {/* <ScrollView 
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={true}
                    style={{margin:10,width:300,height:300,backgroundColor:'brown'}}
                    onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.eventValue}}}]
                            )}
                    scrollEventThrottle={100}>
                        <Animated.Image
                        source={require('../../../resource/t2.png')}
                        resizeMode="cover"
                        style={{
                            width:this.state.eventValue.interpolate({ inputRange:[0,300], outputRange:[100,300]}),
                            height:500
                        }} />
                </ScrollView> */}

                

            </Animated.View>
        );
    }

    _onPress() {
        // LayoutAnimation.configureNext({
        //     duration: 700,   //持续时间
        //     create: {
        //         type: 'linear',
        //         property: 'opacity'
        //     },
        //     update: {
        //         type: 'spring',
        //         springDamping: 0.4
        //     }
        // });
        // this.setState({w: this.state.w - 20, h: this.state.h - 20});

        // Animated.timing(this.state.ov, {
        //     toValue:0,
        //     duration:3000,
        //     delay:3000,
        //     easing:Easing.bezier(0.15, 0.73, 0.37, 1.2),
        //     useNativeDriver:true
        // }).start();

        // this.state.postion.setValue({x:20,y:100});
        Animated.spring(
            this.state.postion,{
                toValue:{x:50,y:200},
                friction: 7,     //摩擦系数
                tension: 40,      //张力系数
                // bounciness:5,
                // speed:5
              }
        ).start();

        // Animated.decay(
        //     this.state.bounceValue,{
        //         toValue:0.2,
        //         velocity: 0.1,      //速度
        //         deceleration: 0.9   //哀减
        //       }
        // ).start();

        // this.state.ov.stopAnimation(val => {
        //     console.log('监听动画值并停止动画......',val);
        // });
        // this.state.ov.addListener(val => {
        //     console.log('监听动画值并停止动画......',val);
        // });
    }

}

let styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#00ff00'
    }
});

export default imPage;
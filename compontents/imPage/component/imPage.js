import React,{Component} from 'react';
import {
    Animated,
    LayoutAnimation,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Immutable,{Map,List,Set} from 'immutable';
import Cursor from '../../../node_modules/immutable/contrib/cursor';

let screen = Dimensions.get('window');

class imPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            w:200,
            h:100
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

                <View style={{width: this.state.w, height: this.state.h, backgroundColor:'red'}}>
                    <TouchableOpacity style={{width:100,height:40,backgroundColor:'green',margin:5}} onPress={() => this._onPress()}>
                        <Text>点击</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
        );
    }

    _onPress() {
        LayoutAnimation.configureNext({
            duration: 700,   //持续时间
            create: {
                type: 'linear',
                property: 'opacity'
            },
            update: {
                type: 'spring',
                springDamping: 0.4
            }
        });
        this.setState({w: this.state.w - 20, h: this.state.h - 20})
    }

}

let styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#00ff00'
    }
});

export default imPage;
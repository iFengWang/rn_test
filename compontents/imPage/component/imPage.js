import React,{Component} from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet
} from 'react-native';

import Immutable,{Map,List,Set} from 'immutable';
import Cursor from '../../../node_modules/immutable/contrib/cursor';

class imPage extends Component {

    componentWillMount() {
        // alert(JSON.stringify(this.props.full));

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

        let a = Immutable.fromJS({a:{b:{c:1}}});
        let cursor = Cursor.from(a,['a','b'], newData => {
            console.log('aaa.....',newData.toJS());
        });
        cursor = cursor.update('c', x => x + 1);
        cursor.get('c');
    }

    render() {
        return (
            <Animated.View style={styles.container}>
                <Text key='000' style={{lineHeight:50}}>IM首页</Text>
                {Object.keys(this.props.state).map(key => <Text key={key+''}>{this.props.state[key+''].name}</Text>)}
            </Animated.View>

            // <View style={styles.container}>

            // </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00ff00'
    }
});

export default imPage;
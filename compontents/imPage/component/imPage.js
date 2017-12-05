import React,{Component} from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet
} from 'react-native';

class imPage extends Component {

    componentWillMount() {
        // alert(JSON.stringify(this.props.full));
    }

    render() {
        return (
            <Animated.View style={styles.container}>
                <Text key='000' style={{lineHeight:50}}>IM首页</Text>
                {Object.keys(this.props.state).map(key => <Text key={key+''}>{this.props.state[key+''].name}</Text>)}
            </Animated.View>
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
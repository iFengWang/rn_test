import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Vibration
} from 'react-native';

let screen = Dimensions.get('window');

class timerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:this.props.time
        }
        this.deleClick = this.deleClick.bind(this);
    }

    componentDidMount() {
        // this.timer();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:16,color:'white'}}>{`${this.props.title} : `}</Text>
                <Text style={{flex:1,textAlign:'left'}}>{this.state.time}</Text>

                <TouchableOpacity style={styles.item} onPress={()=>this.deleClick()}>
                    <Text>删除</Text>
                </TouchableOpacity>
            </View>
        );
    }
    /* 私有方法*/
    timer() {
        let timer = setInterval(()=>{
            if (this.state.time>0) {
                this.setState({time:this.state.time-1});
            } else {
                // const DURATION = 10000;
                // const PATTERN = [1000, 2000, 3000];
                Vibration.vibrate();
                Vibration.cancel();
                clearInterval(timer);
            }
        },1000);
    }

    deleClick() {
        this.props.deleteFun(this.props.id);
    }
}

let styles = StyleSheet.create({
    container:{
        margin:5,
        padding:5,
        height:40,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#159851',
        borderWidth:1,
        borderColor:'gray',
        // borderStyle:'dotted',
        borderRadius:5
    },
    item:{
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        backgroundColor:'yellow',
        borderRadius:5,
        width:60,
        height:25
    }
});

export default timerComponent;
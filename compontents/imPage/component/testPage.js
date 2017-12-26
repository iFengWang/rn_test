import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    NetInfo
} from 'react-native';

class testPage extends Component {
    render() {
        let {state, action, homeAction} = this.props;
        return (
            <View style={{flex:1, backgroundColor:'pink'}}>
                <TouchableOpacity 
                style={{flex:1,height:50, justifyContent:'center', alignItems:'center'}}
                onPress={() => action.showConversationList()}>
                    <Text>走Redux流程-{state.val}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{flex:1,height:50, justifyContent:'center', alignItems:'center'}}
                onPress={() => homeAction.showData()}>
                    <Text>调其它组件Action</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default testPage;
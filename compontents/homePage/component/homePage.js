import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Animated,
    LayoutAnimation,
    Easing,
    InteractionManager,
    ActivityIndicator,
    Button,
    Modal,
    Text,
    View,
    Picker,
    Switch,
    Slider,
    Dimensions,
    StatusBar,
    NativeModules,
    ScrollView
} from 'react-native';
var ViewPager = require('react-native-viewpager');

import ImPage from '../../imPage';

let screen = Dimensions.get('window');

export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            w:100,
            h:100,
            show:true,
            modalVisible: false,
            falseSwitchIsOn: false,
            language:'java',
            showPicker: false
        };
    }

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 15, 
            h: this.state.h + 15,
            show:!this.state.show
        });
        InteractionManager.runAfterInteractions(()=>{

        });
    }

    _onCallNative() {
        // NativeModules.TestModule.showAlert('找呀找呀找朋友！找到一个好朋友');

        // return async function (dispatch) {
        //     await NativeModules.TestModule.callfun2('-30');
        // }

        NativeModules.TestModule.callfun2('-30').then(
            obj => {
                alert(obj.name+obj.age);
            }
        );
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _renderPage() {
        <ScrollView>
            <Text>ssss</Text>
        </ScrollView>
    }

    componentWillMount() {
        // let {actions} = this.props;
        // actions.showData();
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
            toValue:1,
            // easing:Easing.back,
            duration:2000
            }
        ).start();
    }

    render() {
        let {state, actions} = this.props;
        return (

            <ViewPager 
            locked = {true}
            initialPage = {0}
            autoPlay = {false}
            isLoop = {false}
            dataSource={this.state.pages}
            renderPage={this._renderPage}
            renderPageIndicator={<Text>loading...</Text>}
            onChangePage = {()=>{}} />


            // <ScrollView>

            //     {/* <View style={{width:screen.width, height:200, backgroundColor:'red'}}>
            //         {state.map((item,index) => <Text key={index}>{item.name}</Text>)}
            //     </View> */}

            //     <TouchableOpacity onPress={() => actions.addData({name:'中国', age:100000})}>
            //             <Text style={{width:200,height:40,backgroundColor:'green',textAlign:'center',lineHeight:40,margin:2}}>走Redux流程</Text>
            //     </TouchableOpacity>

            //     <TouchableOpacity onPress={() => actions._onCallNative()}>
            //             <Text style={{width:200,height:40,backgroundColor:'green',textAlign:'center',lineHeight:40,margin:2}}>调Native</Text>
            //     </TouchableOpacity>

            //     <TouchableOpacity onPress={() => actions.showData()}>
            //             <Text style={{width:200,height:40,backgroundColor:'green',textAlign:'center',lineHeight:40,margin:2}}>发起网络请求</Text>
            //     </TouchableOpacity>

            //     <TouchableHighlight 
            //     onPress={()=>console.log('TouchableHighlight')}
            //     onLongPress={()=>console.log('TouchableHighlight Long Press')}>
            //         <Text style={{width:200,height:40,backgroundColor:'green',textAlign:'center',lineHeight:40,margin:2}}>TouchableHighlight</Text>
            //     </TouchableHighlight>

            //     <TouchableOpacity 
            //     onPress={()=>console.log('TouchableOpacity')}
            //     onLongPress={()=>alert('TouchableOpacity Long Press')}>
            //         <Text style={{width:200,height:40,backgroundColor:'green',textAlign:'center',lineHeight:40,margin:2}}>TouchableOpacity</Text>
            //     </TouchableOpacity>

            //     {/* <TouchableNativeFeedback onPress={()=>console.log('TouchableNativeFeedback')}>
            //         <Text>TouchableNativeFeedback</Text>
            //     </TouchableNativeFeedback> 

            //     <TouchableWithoutFeedback onPress={()=>console.log('TouchableWithoutFeedback')}>
            //         <Text>TouchableWithoutFeedback</Text>
            //     </TouchableWithoutFeedback>*/}


            //     <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
            //     <TouchableOpacity onPress={this._onPress}>
            //         <View style={styles.button}>
            //         <Text style={styles.buttonText}>Press me!</Text>
            //         </View>
            //     </TouchableOpacity>

            //     {state.isFething ? 
            //     <Modal
            //     animationType={"fade"}
            //     transparent={true}>
            //         <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
            //             <ActivityIndicator 
            //             animating={this.state.show}
            //             color='green'
            //             ref='aaaaa'
            //             size='large'
            //             hidesWhenStopped={true}
            //             style={styles.activity} />
            //         </View>
            //     </Modal> : null}
                
            //     <View style={{backgroundColor:'red',width:screen.width,height:150}}>
            //         {state.items && Object.keys(state.items).map(key => <Text key={key+''}>{state.items[key+'']}</Text>)}
            //     </View>

            //     <Modal
            //         animationType={"fade"}
            //         transparent={true}
            //         visible={this.state.modalVisible}
            //         onRequestClose={() => {alert("Modal has been closed.")}}
            //         >
            //         <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
            //         <View style={{
            //         width:250,
            //         height:200,
            //         backgroundColor:'white',
            //         borderRadius:10,
            //         justifyContent:'flex-start',
            //         alignItems:'center',shadowColor:'black',shadowOpacity:0.5,shadowOffset:{x:5,y:5},shadowRadius:5}}>

            //         <Text style={{padding:10,lineHeight:25,fontSize:20, color:'#333333'}}>温馨提示</Text>

            //         <Text style={{paddingLeft:20,paddingRight:20,lineHeight:25, color:'#666666',height:90}}>正文在此，好人一生平安，我们都有一个家，名字叫中国，兄弟姐妹都很多，景色也不错！</Text>

            //         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
            //             <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
            //                 <Text style={{margin:10,width:80,height:35,borderRadius:5,borderWidth:1,textAlign:'center',lineHeight:35}}>取消</Text>
            //             </TouchableOpacity>
            //             <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
            //                 <Text style={{margin:10,width:80,height:35,borderRadius:5,borderWidth:1,textAlign:'center',lineHeight:35}}>确定</Text>
            //             </TouchableOpacity>
            //         </View>

            //         </View>
            //         </View>
            //     </Modal>

            //     <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
            //         <Text>Show Modal</Text>
            //     </TouchableHighlight>
            //     <View style={{height:150, width:screen.width}}>
            //         <ImPage />
            //     </View>

            //     <Switch
            //         onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            //         style={{marginBottom:10,marginTop:10}}
            //         value={this.state.falseSwitchIsOn} />

            //     <Modal
            //     animationType={"fade"}
            //     transparent={true}
            //     visible={this.state.showPicker}
            //     onShow={()=>{alert('show.......')}}
            //     onRequestClose={() => {alert("Modal has been closed.")}}>
            //     <View style={{flex:1, justifyContent:'flex-end',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
            //         <Picker
            //         style={{width:375,backgroundColor:'white',alignSelf:'flex-end'}}
            //         selectedValue={this.state.language}
            //         onValueChange={(lang) => this.setState({language: lang,showPicker:false})}>
            //         <Picker.Item label="Java" value="java" />
            //         <Picker.Item label="JavaScript" value="js" />
            //         <Picker.Item label="Go" value="go" />
            //         <Picker.Item label="Python" value="py" />
            //         <Picker.Item label="C++" value="c++" />
            //         </Picker>
            //     </View>
            //     </Modal>

            //     <TouchableHighlight onPress={() => {this.setState({showPicker:true})}}>
            //         <Text>Show Picker</Text>
            //     </TouchableHighlight>

            //     <Slider 
            //     style={{width:screen.width-30*2}}
            //     minimumTrackTintColor='red'
            //     maximumTrackTintColor='green'
            //     minimumValue={0}
            //     maximumValue={100}
            //     value={50}
            //     step={1} />

            //     <StatusBar barStyle='default' />

            // </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    box:{
        backgroundColor:'green'
    },
    activity:{
        // backgroundColor:'yellow',
        // borderWidth:1,
        // borderColor:'red'
    }
});
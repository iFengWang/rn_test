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
    Alert,
    ScrollView,
    Image
} from 'react-native';
import ViewPager from 'react-native-viewpager';

// import ImPage from '../../imPage';

let screen = Dimensions.get('window');

export default class homePage extends Component {
    constructor(props) {
        super(props);

        var ds = new ViewPager.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            fadeAnim: new Animated.Value(0),
            w:100,
            h:100,
            show:true,
            modalVisible: false,
            falseSwitchIsOn: false,
            language:'java',
            showPicker: false,
            pages:ds.cloneWithPages(props.state.pages),
            currentPage:0
        };
    }

    componentWillMount() {
        // let {actions} = this.props;
        // actions.showData();
        // alert('homepage.........'+JSON.stringify(this.props.full));
        // Alert.alert('标题','内容在此内容在此',[{text:'ok',onPress:()=>{alert('...')}},{text:'cancel',onPress:()=>{alert('111')}}])
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

    _renderNavBar(state) {

        return (
            <View style={{width:screen.width,height:64,backgroundColor:'#999999',flexDirection:'row',justifyContent:'center'}}>
                {state.pages.map((page, index) => 
                    <TouchableOpacity key={index} onPress={() => this.viewpager.goToPage(index)}>
                        <Text style={[styles.titleTxt,{color:this.state.currentPage==index?'#ff0000':'#000000'}]}>{page.title}</Text>
                    </TouchableOpacity>
                )}

            </View>
        );
    }

    render() {
        let {state, actions} = this.props;
        return (
            <View style={{flex:1}}>
                {this._renderNavBar(state)}
                <ViewPager 
                    ref={(viewpager) => {this.viewpager = viewpager}}
                    style={{flex:1}}
                    locked={true}
                    initialPage={this.state.currentPage}
                    autoPlay={false}
                    isLoop={false}
                    dataSource={this.state.pages}
                    renderPage={this._renderPage.bind(this)}
                    renderPageIndicator={false}
                    onChangePage = {(pageIndex) => this.setState({currentPage:pageIndex})}
                />
             </View>
        );
    }

    _onPress() {
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

    _onCallNative (p1,p2) {
        NativeModules.TestModule.showAlert('找呀找呀找朋友！找到一个好朋友');
        // return async function (dispatch) {
        //     await NativeModules.TestModule.callfun2('-30');
        // }

        // NativeModules.TestModule.callfun2('-30').then(
        //     obj => {
        //         alert(obj.name+obj.age);
        //     }
        // );
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _renderPage(data,pageId) {
        let {state, actions} = this.props;
        switch(pageId.toString()) {
            case '0':
                return (
                    <ScrollView
                    style={{
                        flex:1,
                        backgroundColor:pageId%2==0?'#CCCCCC':'#666666'}}
                    key={pageId+''} >
                        {/* <ImPage /> */}
                    </ScrollView>
                );
            case '1':
                return (
                    <ScrollView
                    style={{
                        flex:1,
                        backgroundColor:pageId%2==0?'#CCCCCC':'#666666'}}
                    key={pageId+''} >
                        <Text style={{textAlign:'center'}}>{data.content}</Text>
                        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
                            <TouchableOpacity onPress={() => this._onPress()}>
                                <View style={styles.button}>
                                <Text style={styles.buttonText}>Press me!</Text>
                                </View>
                            </TouchableOpacity>
                    </ScrollView>
                );
                case '2':
                    return (
                        <ScrollView
                        style={{
                            flex:1,
                            backgroundColor:pageId%2==0?'#CCCCCC':'#666666',
                            paddingVertical:0}}
                        key={pageId+''} >
                            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                <TouchableOpacity 
                                style={{width:120,backgroundColor:'green',justifyContent:'center',alignItems:'center',height:40,margin:2}}
                                onPress={() => actions.addData({name:'中国', age:100000})}>
                                    <Text>走Redux流程</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                style={{width:120,backgroundColor:'green',justifyContent:'center',alignItems:'center',height:40,margin:2}}
                                onPress={() => this._onCallNative('aaa', 'bbb')}>
                                    <Text>调Native</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                style={{width:120,backgroundColor:'green',justifyContent:'center',alignItems:'center',height:40,margin:2}}
                                onPress={() => actions.showData()}>
                                    <Text>发起网络请求</Text>
                                </TouchableOpacity>

                                <TouchableHighlight 
                                style={{width:120,backgroundColor:'green',justifyContent:'center',alignItems:'center',height:40,margin:2}}
                                onPress={() => {this._setModalVisible(true)}}>
                                    <Text>模态视图</Text>
                                </TouchableHighlight>

                                <TouchableHighlight 
                                style={{width:120,backgroundColor:'green',justifyContent:'center',alignItems:'center',height:40,margin:2}}
                                onPress={() => {this.setState({showPicker:true})}}>
                                    <Text>选择器</Text>
                                </TouchableHighlight>
                            </View>


                            {state.isFething 
                            ? 
                            <Modal
                            animationType={"fade"}
                            transparent={true}>
                                <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
                                    <ActivityIndicator 
                                    animating={this.state.show}
                                    color='green'
                                    ref='aaaaa'
                                    size='large'
                                    hidesWhenStopped={true}
                                    style={styles.activity} />
                                </View>
                            </Modal> 
                            : 
                            <View style={{backgroundColor:'red',width:screen.width,height:200}}>
                                {state.items && Object.keys(state.items).map(key => <Text key={key+''}>{state.items[key+'']}</Text>)}
                            </View>
                            }


                            <View>
                                <Switch
                                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                    style={{marginBottom:10,marginTop:10}}
                                    value={this.state.falseSwitchIsOn} />

                                <Slider 
                                style={{width:screen.width-30*2}}
                                minimumTrackTintColor='red'
                                maximumTrackTintColor='green'
                                minimumValue={0}
                                maximumValue={100}
                                value={50}
                                step={1} />

                                <StatusBar barStyle='default' />
                            </View>

                            <Modal
                                animationType={"fade"}
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {alert("Modal has been closed.")}}
                                >
                                <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                                    <View style={{
                                    width:250,
                                    height:200,
                                    backgroundColor:'white',
                                    borderRadius:10,
                                    justifyContent:'flex-start',
                                    alignItems:'center',shadowColor:'black',shadowOpacity:0.5,shadowOffset:{x:5,y:5},shadowRadius:5}}>
                                        <Text style={{padding:10,lineHeight:25,fontSize:20, color:'#333333'}}>温馨提示</Text>
                                        <Text style={{paddingLeft:20,paddingRight:20,lineHeight:25, color:'#666666',height:90}}>正文在此，好人一生平安，我们都有一个家，名字叫中国，兄弟姐妹都很多，景色也不错！</Text>
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
                                            <TouchableOpacity onPress={() => {this._setModalVisible(!this.state.modalVisible)}}>
                                                <Text style={{margin:10,width:80,height:35,borderRadius:5,borderWidth:1,textAlign:'center',lineHeight:35}}>取消</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {this._setModalVisible(!this.state.modalVisible)}}>
                                                <Text style={{margin:10,width:80,height:35,borderRadius:5,borderWidth:1,textAlign:'center',lineHeight:35}}>确定</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <Modal
                            animationType={"fade"}
                            transparent={true}
                            visible={this.state.showPicker}
                            onShow={()=>{alert('show.......')}}
                            onRequestClose={() => {alert("Modal has been closed.")}}>
                                <View style={{flex:1, justifyContent:'flex-end',alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                                    <Picker
                                    style={{width:375,backgroundColor:'white',alignSelf:'flex-end'}}
                                    selectedValue={this.state.language}
                                    onValueChange={(lang) => this.setState({language: lang,showPicker:false})}>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                    <Picker.Item label="Go" value="go" />
                                    <Picker.Item label="Python" value="py" />
                                    <Picker.Item label="C++" value="c++" />
                                    </Picker>
                                </View>
                            </Modal>

                        </ScrollView>
                    );
            defalt:
                return <Text>default</Text>
        }
    }

    _111() {
        let {state, actions} = this.props;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    box: {
        backgroundColor:'green'
    },
    activity: {
        // backgroundColor:'yellow',
        // borderWidth:1,
        // borderColor:'red'
    },
    titleTxt: {
        width:60, 
        paddingTop:20, 
        lineHeight:40, 
        textAlign:'center'
    }
});
import React,{Component} from 'react';
import {
    Animated,
    View,
    Text,
    PanResponder,
    Dimensions,
    ART,
    AppState
} from 'react-native';
import { ADD_DATA } from '../../homePage/action/actionType';

let screen = Dimensions.get('window');
const {Surface, Shape, Path} = ART;

class twoPage extends Component {

    _panResponder = {};

    constructor(props) {
        super(props);
        this.state = {
            trans: new Animated.ValueXY(),
            drag: false,
            currentAppState: AppState.currentState
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            
            onPanResponderGrant: (evt, gestureState) => {
                this.setState({drag:true});
            },

            // onPanResponderStart: (evt, gestureState) => {
            //     this.setState({drag:true});
            // },

            onPanResponderMove: Animated.event(
                [null, {dx:this.state.trans.x, dy:this.state.trans.y}]
            ),
              
            onPanResponderRelease: (evt, gestureState) => {
            Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}).start();
            this.setState({drag:false});
            },

            onPanResponderTerminate: (evt, gestureState) => {
            Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}).start();
            this.setState({drag:false});
            },

            onShouldBlockNativeResponder: (evt, gestureState) => {
            // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
            // 默认返回true。目前暂时只支持android。
            return true;
            },
        });
    }

    componentDidMount() {
        AppState.addEventListener('change',this._currentState);
        AppState.addEventListener('memoryWarning',this._memoryWarn);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change',this._currentState);
        AppState.removeEventListener('memoryWarning',this._memoryWarn);
    }

    _currentState = (nextAppState) => {
        console.log('curentState......',nextAppState);
        this.setState({currentState:nextAppState});
    }

    _memoryWarn = () => {
        console.log('内存不足啦');
    }
    
    render() {
        
        // const path = Path().moveTo(1,1).lineTo(300,1);

        return (
        <View style={{width:screen.width,height:150,backgroundColor:'blue'}}>

            {/* <Surface width={300} height={2}>
                <Shape d={path} stroke="#000000" strokeWidth={2} strokeDash={[10,5]}/>
            </Surface> */}

            <Animated.View 
            style={{
                width:50,
                height:50,
                borderRadius:25,
                backgroundColor: this.state.drag ? 'yellow':'red',
                transform:[{translateY:this.state.trans.y}, {translateX:this.state.trans.x}]
            }}
            {...this._panResponder.panHandlers}>
            </Animated.View>
        </View>
         );
    }
}

export default twoPage;
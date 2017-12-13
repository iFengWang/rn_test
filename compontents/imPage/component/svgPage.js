import React,{ Component } from 'react';
import Svg,{
    Line,
    Circle,
    Ellipse,
    Rect,
    G,
    Symbol,
    Use,
    Text,
    TextPath,
    TSpan,
    Defs,
    Stop,
    LinearGradient,
    RadialGradient,
    Polyline,
    ClipPath,
    Path,
    Polygon,
    Image as SvgImage
} from 'react-native-svg';
import {
    Animated,
    View,
    Dimensions,
    Image
} from 'react-native';
// import AnimatedImplementation from 'AnimatedImplementation';
// import fang from '../../../resource/fang.svg';
let AnimatedRect = Animated.createAnimatedComponent(Rect);

let screen = Dimensions.get('window');

class svgPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strokeDashOffset:new Animated.Value(5),
            xOffset:new Animated.Value(20)
        };
    }

    _onPress() {
        Animated.parallel([
            Animated.spring(
                this.state.strokeDashOffset,{
                    toValue:250
                }
            ),
            Animated.timing(
                this.state.xOffset,{
                    toValue:50,
                    duration: 500
                }
            )
        ]).start();
    }

    render() {
        return (
            <View style={{width:screen.width, height:200, backgroundColor:'gray'}}>
                 <Svg width={screen.width} height={150}>
                    {/* <Rect x="10" y="10" width="100" height="100" fill="#00ff00" />
                    <Circle cx="50" cy="50" r="30" fill="yellow" />
                    <Path d="M40 60 A 10 10 0 0 0 60 60" stroke="red" fill="blue" />
                    <Path d="M40 120 L60 120 H120 V150" stroke="yellow" strokeWidth="3" fill="red"/>
                    <Text
                        fill="none"
                        stroke="purple"
                        fontSize="20"
                        fontWeight="bold"
                        x="100"
                        y="20"
                        textAnchor="center"
                    >STROKED TEXT</Text> */}

                    {/* <Defs>
                        <G rotate="0" id="feng">
                            <Rect width="30" height="30" fill="red" y="0" x="0" />
                            <Rect width="30" height="30" fill="red" y="50" x="0" />
                        </G>
                        <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <Stop offset="0%" stopColor="red" stopOpacity="1" />
                            <Stop offset="50%" stopColor="rgb(255,255,0)" stopOpacity="0" />
                            <Stop offset="100%" stopColor="green" stopOpacity="1" />
                        </LinearGradient>
                        <RadialGradient id="grad2" cx="250" cy="100" rx="30" ry="40" fx="270" fy="100">
                            <Stop offset="0%" stopColor="#f00" stopOpacity="0" />
                            <Stop offset="100%" stopColor="#0f0" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>
                    <Use href="#feng" x="0" y="50" />
                    <Use href="#feng" x="50" y="50" />
                    <Use href="#feng" x="100" y="50" />
                    <Ellipse cx="250" cy="75" rx="85" ry="55" fill="url(#grad1)" />
                    <Ellipse cx="250" cy="100" rx="30" ry="40" fill="url(#grad2)" /> */}

                    {/* <Symbol id="symbol" viewbox="0 0 150 110" width="100" height="50">
                        <Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red"/>
                        <Circle cx="90" cy="60" r="40" strokeWidth="8" stroke="green" fill="white"/>
                    </Symbol>
                    <Use href="#symbol" x="0" y="0" />
                    <Use href="#symbol" x="0" y="50" width="75" height="38" /> */}

                    {/* <Defs>
                        <Path id="path" d="M20 20 L150 150" stroke="purple" strokeWidth="3" />
                    </Defs>
                    <G y="20">
                        <Text fill="blue">
                            <TextPath href="#path" startOffset="-10%">
                                我们都有一个家，
                                <TSpan fill="red" dy="5,5,5">名字叫中国</TSpan>
                            </TextPath>
                        </Text>
                        <Use href="#path" x="15" y="25" width="130" height="130" />
                    </G> */}

                    {/* <Defs>
                        <ClipPath id="clip">
                            <G>
                                <Circle cx="25%" cy="25%" r="10%"/>
                                <Text
                                    x="50"
                                    y="30"
                                    fontSize="32"
                                    fonWeight="bold"
                                    textAnchor="middle"
                                    scale="1.2"
                                >Q</Text>
                            </G>
                        </ClipPath>
                    </Defs>
                    <SvgImage
                        x="0"
                        y="0"
                        width="50%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        opacity="0.5"
                        href={require('../../../resource/t2.png')}
                        // href={require('../../../resource/fang.svg')}
                        // clipPath="url(#clip)"
                        // clipRule="evenodd"
                        onPress={()=>alert('当前点中的是t2.png')}
                    /> */}

                    {/* <Path 
                    x="80"
                    y="60"
                    stroke="yellow" 
                    strokeWidth="1" 
                    fillOpacity="1"
                    rotate="40" 
                    fill="red" 
                    d="M17 32c-0.072 0-0.144-0.008-0.217-0.024-0.458-0.102-0.783-0.507-0.783-0.976v-15h-15c-0.469 0-0.875-0.326-0.976-0.783s0.129-0.925 0.553-1.123l30-14c0.381-0.178 0.833-0.098 1.13 0.199s0.377 0.749 0.199 1.13l-14 30c-0.167 0.358-0.524 0.577-0.906 0.577zM5.508 14h11.492c0.552 0 1 0.448 1 1v11.492l10.931-23.423-23.423 10.931z" 
                    /> */}

                    <AnimatedRect 
                    x="20"
                    y="20"
                    width="200"
                    height="200"
                    fill="red"
                    fillOpacity="0.5"
                    stroke="yellow" 
                    strokeWidth="1" 
                    strokeDasharray="2,5"
                    strokeDashoffset={this.state.strokeDashOffset}
                    onPress={()=> this._onPress()} />
                </Svg>

                {/* <Image style={{width:200,height:200, backgroundColor:'purple'}} source={require('../../../resource/fang.svg')} /> */}

            </View>
        );
    }
}

export default svgPage;
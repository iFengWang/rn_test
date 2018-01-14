/******************************************************
* file        : xsyText.js
* description : 定义销售易文本组件的文件
* creator     : frank.w
* create_time : 2018-01-10 15:53:35
* 
* editor      : 
* edit_time   : 
* edit_note   : 
******************************************************/
import React,{ PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import XsyComponent from '../../xsyComponent/components/xsyComponent';

/* 常量定义区******************************************/
let customStyle = {};


/*
* class       : xsyText
* description : 文本类，常用于静态信息展示。
*/
class xsyText extends XsyComponent {
  /* PropType声明 */
  // static propTypes = {
  //   title: PropTypes.String,                  //标题
  //   value: PropTypes.String.isRequired,       //内容
  //   layout: PropTypes.String,                 //取值范围 -> H：水平 / V：垂直
  //   titleFontSize: PropTypes.Number,          //标题字号
  //   titleFontColor: PropTypes.String,         //标题颜色
  //   valueFontSize: PropTypes.Number,          //内容字号
  //   valueFontColor: PropTypes.String,         //内容颜色
  //   valueAlign: PropTypes.String,             //内容对齐方式 取值范围 -> left / right
  //   valueWrap: PropTypes.Boolean              //内容是否支持换行
  // }

  /* 构造函数 */
  constructor(props) {
    super(props);
  }

  // customStyle() {
  //   let {
  //     titleFontSize, 
  //     titleFontColor, 
  //     valueFontSize, 
  //     valueFontColor, 
  //     valueAlign, 
  //     valueWrap} = this.props;
  //   let ary = [];
  //   if (titleFontColor) ary.push({color:titleFontColor});
  //   if (titleFontSize) ary.push({fontSize:titleFontSize});
  //   return {...ary};
  // }

  componentWillMount() {
    let {
      titleFontSize, 
      titleFontColor, 
      valueFontSize, 
      valueFontColor, 
      valueAlign, 
      valueWrap} = this.props;

    customStyle = {
      titleFontSize, 
      titleFontColor, 
      valueFontSize, 
      valueFontColor, 
      valueAlign, 
      valueWrap};
  }

  render() {
    let {
      title, 
      value, 
      layout, 
      titleFontSize, 
      titleFontColor, 
      valueFontSize, 
      valueFontColor, 
      valueAlign, 
      valueWrap} = this.props;
    return (
      <View style={layout==='H' ? styles.hLayout : styles.vLayout}>
        {title!==null && title.trim()!=='' 
          ? <Text style={[this.defaultStyle(), styles.titleStyle]}>{`${title}：`}</Text>
          : null
        }
        <Text style={[this.defaultStyle(), {color:valueFontColor, fontSize:valueFontSize}]}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hLayout:{
    paddingTop:30,
    paddingLeft:15,
    flex:1,
    flexDirection:'row'
  },
  vLayout:{
    paddingTop:30,
    paddingLeft:15,
    flex:1,
    flexDirection:'column'
  },
  titleStyle:{
    color:[customStyle.titleFontSize ? customStyle.titleFontSize : 'null']
  },
  valueStyle:{}
});

export default xsyText;
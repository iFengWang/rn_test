/******************************************************
* file        : xsyComponent.js
* description : 所有销售易组件的基类文件
* creator     : frank.w
* create_time : 2018-01-10 15:53:35
* 
* editor      : 
* edit_time   : 
* edit_note   : 
******************************************************/
import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet
} from 'react-native';

/*
* class       : xsyComponent
* description : 基类不做作何实现，只提供默认属性配置，子类可覆盖重写，所有销售易组件类均继承此类。
*/
class xsyComponent extends Component {

  /* PropType声明 */
  // static propTypes = {
  //   data: PropTypes.object.isRequired,
  //   fetchData: PropTypes.func.isRequired
  // }

  /* 静态属性 */
  getDefaultProps() {
    
  }

  /* 实例属性 */
  defaultStyle() {
    return styles.defalutStyle;
  }

  /* 构造函数 */
  constructor(props) {
    super(props);
  }

  /* 静态方法 */
  /* 实例方法 */
  /* 私有函数 */
  /* 生命周期函数 */
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  componentDidUpdate() {}
  render() {}
  componentWillUnmount() {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  defalutStyle: {
    color:'red',
    fontSize:25,
    lineHeight:30
  }
});

export default xsyComponent;
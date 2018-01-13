import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

let screen = Dimensions.get('window');

class crmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, title: '上下五千年', desc: '历史书籍', avtar: '../images/p1.png' },
        { id: 2, title: '和时间作朋友', desc: '心灵鸡汤', avtar: '../images/p2.png' },
        { id: 3, title: '财富自由之路', desc: '李笑来传记', avtar: '../images/p3.png' },
        { id: 4, title: '百年孤独', desc: '魔幻经典', avtar: '../images/p4.png' },
        { id: 5, title: '平凡的世界', desc: '路遥之著', avtar: '../images/p5.png' },
        { id: 6, title: '三体', desc: '宏观宇宙史', avtar: '../images/p6.png' },
        { id: 7, title: '坚持一种可以养成的习惯', desc: '个人成长', avtar: '../images/p7.png' },
        { id: 8, title: '挪威的森林', desc: '春上村树小说', avtar: '../images/p8.png' }
      ]
    }
  }


  render() {
    return (
      <FlatList
        ref='dataList'
        style={{ height: screen.height - 64 }}
        data={this.state.list}
        renderItem={({ item, section, index }) => {
          return (
            <TouchableOpacity opacity={0.7}>
              <View key={item.id} style={{ flex: 1,flexDirection:'row', backgroundColor: 'pink', height: 100 }}>
                <Image source={{uri:item.avtar}} style={{ width: 80, height: 80, margin: 10 }} />
                <View style={{flex:1}}>
                  <Text>{item.title}</Text>
                  <Text>{item.desc}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, number) => number}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <View style={{ flex: 1, marginLeft: 15, marginRight: 15, height: 0.5, backgroundColor: '#CCC' }} />}
      // ListEmptyComponent = {() => <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><Text>暂无数据</Text></View>}
      // refreshControl={ <RefreshControl
      //         title={'下拉刷新'}
      //         refreshing={currentState.loadState === config.loadStateEnum.START_LOAD ? true : false}
      //         onRefresh={this.loadInitData} /> }
      />
    );
  }
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#00FF00'
  }
};

export default crmPage;
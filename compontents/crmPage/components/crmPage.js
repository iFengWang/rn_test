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
        { 
          id: 1, 
          title: '围城', 
          desc: '钱钟书大师之作，语言的艺术，出自才子之手果然不凡', 
          avtar: require('../images/p1.jpg'),
          detail: require('../images/detail.png')
        },
        { 
          id: 2, 
          title: '和时间作朋友', 
          desc: '李笑来的作品有人读后醍醐灌顶，有人讽刺是心灵鸡汤', 
          avtar: require('../images/p2.jpg'),
          detail: require('../images/detail.png')
        },
        { 
          id: 3, 
          title: '财富自由之路', 
          desc: '李笑来又一著作，好坏读都自判', 
          avtar: require('../images/p3.jpg'),
          detail: require('../images/detail.png')
        },
        { 
          id: 4, 
          title: '百年孤独', 
          desc: '魔幻经典，曾经受百年孤独的南美大陆一去不复返', 
          avtar: require('../images/p4.jpg'),
          detail: require('../images/detail.png')
        },
        { 
          id: 5, 
          title: '平凡的世界', 
          desc: '路遥之著，平凡的世界，平凡的我们，认真做好自己', 
          avtar: require('../images/p5.jpg'),
          // detail: require('../images/detail.png')
        },
        { 
          id: 6, 
          title: '三体', 
          desc: '宏观宇宙史，人类的未来是什么，与整个宇宙相比是那么微不足道', 
          avtar: require('../images/p6.jpg'),
          detail: require('../images/detail.png')
        },
        { 
          id: 7, 
          title: '坚持一种可以养成的习惯', 
          desc: '个人成长的圣经，如何从自我培训开始', 
          avtar: require('../images/p7.jpg') 
        },
        { 
          id: 8, 
          title: '挪威的森林', 
          desc: '春上村树小说，揭示日本战后年青迷茫的一代', 
          avtar: require('../images/p8.jpg'),
          detail: require('../images/detail.png')
        }
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
              <View key={item.id} 
              style={{ flex: 1,flexDirection:'row', backgroundColor: '#EEE', height: 100 }}>
                <Image 
                source={item.avtar} 
                style={{ width: 80, height: 80, margin: 10, marginRight:5, borderRadius:5 }} />
                <View style={{flex:1,padding:5}}>
                  <Text style={{fontSize:14,color:'#333',margin:5,lineHeight:18}}>{item.title}</Text>
                  <Text style={{fontSize:12,color:'#999',margin:5,lineHeight:16}}>{item.desc}</Text>
                </View>
                <Image 
                source={item.detail} 
                style={{ margin:5, width: 20, height: 20, justifyContent:'center', alignSelf:'center' }} />
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
        refreshControl={
          <RefreshControl
            title={'下拉刷新'}
            refreshing={false}
            // onRefresh={this.loadInitData} 
            />
        }
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
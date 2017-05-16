'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


import LoginView from './login';
import MyScrollView from './scrollView'
import MyFlatList from './MyFlatList'
import MyListView from './listView/myListView'
import NineListView from './listView/nineListView'
import Main from './code/Main'

let ScreenWidth = require('Dimensions').get('window').width;

// let s = 'Hello world!';
// s.startsWith('Hello');
// s.endsWith('!');
// s.includes('o');

// const App = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: ProfileScreen},
// });

export default class myOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str1: '123',
      str2: '456',
      selectedItem: 'home',
    }
  }

  render() {
    return (
      <Main/>
    );
  }


  demo = () => {
    return(
      <View style={styles.container}>
        {/*<MyScrollView/>*/}
        {/*<LoginView/>*/}
        {/*<MyFlatList/>*/}
        {/*<MyListView/>*/}
        {/*<NineListView/>*/}

        {/*<Text style={styles.contentText}>宽度：{ScreenWidth}</Text>*/}
        {/*<Text style={styles.contentTextOther}>分辨率：{require('Dimensions').get('window').scale}</Text>*/}
        {/*<Image*/}
        {/*style={styles.contentImage}*/}
        {/*source={require('./icon.png')}*/}
        {/*// source={{uri: 'http://'}}*/}
        {/*>*/}
        {/*<Text style={styles.imageText}>我是文字{this.state.str1}</Text>*/}
        {/*</Image>*/}

        {/*<View style={styles.bottomBox}>*/}
        {/*{this.renderAllBox()}*/}
        {/*</View>*/}
      </View>
    )
  };

  // ----------------------------包-------------------------------
  renderAllBox = () => {
    let allBox = [];

    for (let i = 0; i < 6; i++)
    {
      allBox.push(
        <Image key={i} style={styles.boxImage} source={require('./icon.png')}>
          <Text style={styles.boxImageText}>
            第一个包
          </Text>
        </Image>
      )
    }
    return allBox;
  }
}



const styles = StyleSheet.create({
  // -----------------------------基础练习--------------------------------
  container: {
    backgroundColor: 'pink',
    // flexDirection: 'row',
    // flexDirection: 'column-reverse',
    // flexDirection: 'row-reverse',
    // flexDirection: 'column',

    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',

    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    // alignItems: 'stretch',
    // alignItems: 'center',

    // flexWrap: 'nowrap',
    // flexWrap: 'wrap',

    flex: 1
  },
  contentText: {
    // marginTop: 25,
    // width: 100,
    backgroundColor: 'red',
    height: 30,
    flex: 2,
    alignSelf: 'flex-start',
  },
  contentTextOther: {
    backgroundColor: 'blue',
    height: 50,
    flex: 1,

    // alignSelf: 'auto',
    // alignSelf: 'center',
    // alignSelf: 'stretch',
    // alignSelf: 'flex-end',
    alignSelf: 'flex-start',
  },
  contentImage: {
    backgroundColor: 'yellow',
    width: 50,
    height: 100,
    borderRadius: 3,

    // resizeMode: 'cover',
    // resizeMode: 'contain',
    // resizeMode: 'stretch',
    // resizeMode: 'center',
    resizeMode: 'repeat',  // 仅iOS

    alignSelf: 'flex-end',
  },
  imageText: {
    color: 'yellow',
    backgroundColor: 'transparent',
  },

  // -----------------------------box--------------------------------
  bottomBox: {
    backgroundColor: 'blue',
    width: ScreenWidth,
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  boxImage: {
    width: 80,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 10
  },
  boxImageText: {
    color: 'orange',
    backgroundColor: 'transparent',
  },
  tabBarStyle: {
    // flex: 1,
  },
  tabBarItemStyle: {

  },
});

AppRegistry.registerComponent('myOne', () => myOne);

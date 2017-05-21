'use strict';

import React, { Component } from 'react';
import {StyleSheet, View, Image, Platform, Dimensions} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
// import {StackNavigator} from 'react-navigation';
import px2dp from './util'
let {screenWidth, screenHeight} = Dimensions.get('window');

import Home from './Home/Home'
import Two from './Two/Two'
import Three from './Three/Three'
import Four from './Four/Four'

const HomeIcon = require('./images/tabBar/首页.png');
const HomeIconSelect = require('./images/tabBar/首页_1.png');
const TwoIcon = require('./images/tabBar/搜索.png');
const TwoIconSelect = require('./images/tabBar/搜索_1.png');
const ThreeIcon = require('./images/tabBar/消息中心.png');
const ThreeIconSelect = require('./images/tabBar/消息中心_1.png');
const FourIcon = require('./images/tabBar/我的.png');
const FourIconSelect = require('./images/tabBar/我的_1.png');

export default class BothMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: '首页',
      currentTab: 'Home',
      hideTabBar: false,
    };
    
    BothMain.hideTabBar = BothMain.hideTabBar.bind(this);
    BothMain.showTabBar = BothMain.showTabBar.bind(this);
  }

  static showTabBar(time){
    this.setState({hideTabBar: false})
  }
  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }


  render() {
    return(
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[
          styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}
      >
        {this._allTabBarItem('首页', HomeIcon, HomeIconSelect, '首页', <Home/>)}
        {this._allTabBarItem('two', TwoIcon, TwoIconSelect, 'two', <Two/>)}
        {this._allTabBarItem('three', ThreeIcon, ThreeIconSelect, 'three', <Three/>)}
        {this._allTabBarItem('four', FourIcon, FourIconSelect, 'four', <Four/>)}
      </TabNavigator>
    )
  }

  _allTabBarItem = (tabTitle, iconName, iconNameSelect, navTitle, componentName) => {
    let tabIcon = iconName + '.png';
    let tabSelectIcon = iconName + '_1.png';

    return(
      <TabNavigator.Item
        title = {tabTitle}
        renderIcon={() => <Image source={iconName} style={{width: 25, height: 25}}/>}
        renderSelectedIcon={() => <Image source={iconNameSelect} style={{width: 25, height: 25}}/>}
        selected={this.state.selectedTab === tabTitle}
        onPress={() => this.setState({selectedTab: tabTitle})}
      >
        {componentName}
      </TabNavigator.Item>
    )
  }

}

const styles = StyleSheet.create({
  tabbar: {
    height: px2dp(46),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  hide: {
    transform: [
      {translateX: screenWidth}
    ]
  },
});


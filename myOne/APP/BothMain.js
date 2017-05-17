'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home'
import Two from './Two/Two'
import Three from './Three/Three'
import Four from './Four/Four'

class BothMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
    };
  }

  render() {
    return(
      <TabNavigator>
        {this.allTabBarItem('首页', '首页', '首页', <Home/>)}
        {this.allTabBarItem('two', '搜索', 'two', <Two/>)}
        {this.allTabBarItem('three', '消息中心', 'three', <Three/>)}
        {this.allTabBarItem('four', '我的', 'four', <Four/>)}
      </TabNavigator>
    )
  }

  allTabBarItem = (tabTitle, iconName, navTitle, componentName) => {
    let tabIcon = iconName + '.png';
    let tabSelectIcon = iconName + '_1.png';

    return(
      <TabNavigator.Item
        title = {tabTitle}
        renderIcon={() => <Image source={{uri: tabIcon}} style={{width: 25, height: 25}}/>}
        renderSelectedIcon={() => <Image source={{uri: tabSelectIcon}} style={{width: 25, height: 25}}/>}
        selected={this.state.selectedTab === tabTitle}
        onPress={() => this.setState({selectedTab: tabTitle})}
      >
        {componentName}
      </TabNavigator.Item>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navStyle: {
    flex: 1,
  },
  itemIconStyle: {
    // width: Platform.OS === 'ios' ? 30 : 24,
    // height:Platform.OS === 'ios' ? 30 : 24
  },
});


export default BothMain;


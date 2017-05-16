'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  NavigatorIOS,
  TabBarIOS,
} from 'react-native';

import Home from './Home'
import Two from './Two'
import Three from './Three'
import Four from './Four'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '首页',
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <TabBarIOS
          unselectedTintColor="red"
          tintColor="black"
          barTintColor = 'rgba(255, 255, 255, 0.2)'
        >
          {this.allTabBarItem({tabBarTitle: '首页', navTitle: '首页', componentName: Home})}
          {this.allTabBarItem({tabBarTitle: 'two', navTitle: 'two', componentName: Two})}
          {this.allTabBarItem({tabBarTitle: 'three', navTitle: 'three', componentName: Three})}
          {this.allTabBarItem({tabBarTitle: 'four', navTitle: 'four', componentName: Four})}
        </TabBarIOS>
      </View>
    )
  }

  allTabBarItem = (sourceData) => {
    return(
      <TabBarIOS.Item
        title = {sourceData.tabBarTitle}
        selected={this.state.selectedItem === sourceData.tabBarTitle}
        onPress={() => {this.setState({selectedItem: sourceData.tabBarTitle})}}
      >
        <NavigatorIOS
          style={styles.navStyle}
          initialRoute = {{
            component: sourceData.componentName,
            title: sourceData.navTitle,
          }}
        >
          <Four/>
        </NavigatorIOS>
      </TabBarIOS.Item>
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
});


export default Main;


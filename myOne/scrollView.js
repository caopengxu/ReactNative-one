'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { TimerMixin } from 'react-timer-mixin'

let screenWidth = require('Dimensions').get('window').width;


class MyScrollView extends Component {
  // 注册计时器
  // mixins: [TimerMixin],

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        currentPage: 0,
        intervalTime: 1000
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="myScrollView"
          horizontal={true}
          pagingEnabled={true}
        >
          {this.allChildView()}
        </ScrollView>

        <TouchableHighlight onPress={this.startTimer()}>
          <View >
            {this.allPoint()}
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  // 返回所有的视图
  allChildView = () => {
    let allChild = [];
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black'];

    for (let i = 0; i < colors.length; i++) {
      allChild.push(
        <View key={i} style={{backgroundColor: colors[i], width: 375, height: 50}}>
          <Image
            style={styles.contentImage}
            source={require('./icon.png')}
          />
        </View>
      )
    }

    return allChild;
  };

  // 返回所有的原点
  allPoint = () => {

  };

  startTimer = () => {
    // setInterval(() => {
    //   console.log('321')
    // }, this.state.intervalTime)
  }
}


const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 70,
    backgroundColor: 'blue',
  },
  contentView: {
    backgroundColor: 'red',
    width: screenWidth,
    height: 50,
  },
  contentImage: {
    width: 50,
    height: 50,
  }
});


export default MyScrollView;


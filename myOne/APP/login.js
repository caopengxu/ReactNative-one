'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import Touchable from '../components/Touchable';

let screenWidth = require('Dimensions').get('window').width;

class LoginView extends Component {
  state = {
    str: '登录'
  };

  // // 定义一个属性，并指定类型
  // static defaultProps = {
  //   strName: '登录成功'
  // };
  // static propTypes  = {
  //   strName: React.PropTypes.string.isRequired,
  // };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.loginImgae}
          source={require('./icon.png')}
        />
        <TextInput
          style={styles.loginInputOne}
          // value={'请输入QQ账号'}
          // multiline={true}
          placeholder={'请输入QQ账号'}
          clearButtonMode={'always'}
        />
        <TextInput
          style={styles.loginInputTwo}
          password={true}
          placeholder={'请输入密码'}
        />

        {/*<Touchable onPress={this.renderButtonClick} >*/}
          {/**/}
        {/*</Touchable>*/}
        <TouchableHighlight
          onPress={this.renderButtonClick}
        >
          <View style={styles.loginButton}>
            <Text>
              {this.state.str}
            </Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }

  async renderButtonClick() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      // let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let response = await fetch('http://mobile.72bike.com/open/user/dir_recommend.htm');
      let responseJson = await response.json();
      console.log('111111');
      console.log(responseJson);
      return responseJson.list;
    } catch(error) {
      console.log('222222');
      console.error(error);
    }
  }


}

const styles = StyleSheet.create({
  // -----------------------------login--------------------------------
  container: {
    width: screenWidth,
    height: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  loginImgae: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  loginInputOne: {
    padding: 0,
    // underlineColorAndroid: 'transparent',
    // marginTop: 20,
    width: screenWidth,
    height: 45,
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: 1,

  },
  loginInputTwo: {
    padding: 0,
    // underlineColorAndroid: 'transparent',
    width: screenWidth,
    height: 45,
    textAlign: 'center',
    backgroundColor: 'white',

  },
  loginButton: {
    width: screenWidth - 20,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LoginView;
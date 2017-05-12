/**
 * Created by cpx on 2017/5/12.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import Touchable from './components/Touchable';

var screenWidth = require('Dimensions').get('window').width;

class LoginView extends Component {
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

        <Touchable onPress={this.renderButtonClick} >
          <View style={styles.loginButton}>
            <Text>
              登录
            </Text>
          </View>
        </Touchable>


      </View>
    );
  }

  // 点击登录
  renderButtonClick() {
    AlertIOS.alert('登录啦');
  }
}

const styles = StyleSheet.create({
  // -----------------------------login--------------------------------
  container: {
    width: screenWidth,
    height: 250,
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
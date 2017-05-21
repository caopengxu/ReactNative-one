'use strict';

import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  Picker,
  Slider,
  Switch,
  WebView,
  Animated,
  AppState,
  Keyboard,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

import LoginView from '../login'


class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 100},
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{opacity: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    );
  }
}


class HomeDetail extends Component {
  static navigationOptions = {
    title:'Chat with Lucy',
  };

  state = {
    pickerLgg: 'js',
    switchLgg: false,
    currentAppState: AppState.currentState,
  };

  render() {
    const {params} = this.props.navigation.state;
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.container}>
          <Text>Chat with {params.user}</Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder={'请输入QQ账号'}
            clearButtonMode={'always'}
            // onSubmitEditing={Keyboard.dismiss}
          />
          <LoginView strName=""/>
          

          {/*<ActivityIndicator*/}
            {/*animating={true}*/}
            {/*color='red'*/}
            {/*size='small'*/}
          {/*/>*/}

          {/*<FlatList*/}
            {/*data={[{key: 'a'}, {key: 'b'}]}*/}
            {/*renderItem={({item}) => <Text>{item.key}</Text>}*/}
          {/*/>*/}

          {/*<Picker*/}
            {/*selectedValue={this.state.pickerLgg}*/}
            {/*onValueChange={(lang) => this.setState({pickerLgg: lang})}*/}
          {/*>*/}
            {/*<Picker.Item label="Java" value="java" />*/}
            {/*<Picker.Item label="JavaScript" value="js" />*/}
          {/*</Picker>*/}

          {/*<Slider/>*/}

          {/*<Switch*/}
            {/*// disabled={true}*/}
            {/*value={this.state.switchLgg}*/}
            {/*onvaluechange={(lang) => this.setState({switchLgg: true})}*/}
            {/*onTintColor= 'yellow'*/}
            {/*thumbTintColor= 'red'*/}
            {/*// tintColor= 'blue'*/}
          {/*/>*/}

          {/*<WebView*/}
          {/*style={{width: 300, height: 200, backgroundColor: 'red'}}*/}
          {/*source={{uri: 'https://www.baidu.com'}}*/}

          {/*automaticallyAdjustContentInsets={false}*/}
          {/*javaScriptEnabled={true}*/}
          {/*domStorageEnabled={true}*/}
          {/*decelerationRate="normal"*/}
          {/*startInLoadingState={true}*/}
          {/*/>*/}

          {/*<FadeInView>*/}
            {/*<View style={{width: 100, height: 100, backgroundColor: 'red'}}>*/}

            {/*</View>*/}
          {/*</FadeInView>*/}

          {/*<Text>Current state is: {this.state.currentAppState}</Text>*/}

        </View>
      </TouchableWithoutFeedback>
    )
  }


  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    // alert('Keyboard Shown');
  };

  _keyboardDidHide = () => {
    // alert('Keyboard Hidden');
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});


export default HomeDetail;


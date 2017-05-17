'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';


class HomeDetail extends Component {
  static navigationOptions = {
    title:'Chat with Lucy',
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }

  render() {
    const {params} = this.props.navigation.state;
    return(
      <View style={styles.container}>
        <Text>Chat with {params.user}</Text>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {

  },
});


export default HomeDetail;


'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ListView,
} from 'react-native';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://mobile.72bike.com/open/banner/dir_banner.htm',
      demoUrl: 'https://facebook.github.io/react-native/movies.json',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={{uri: 'home.png'}} style={{width: 100, height: 40}} />
      </View>
    )
  }


  componentDidMount() {
    this.getMoviesFromApi()
  }


  loadDataNet = () => {
    fetch(this.state.url, {method: 'POST'})
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
      })
  };


  async getMoviesFromApi() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch(this.state.demoUrl);
      console.log(response);
      let responseJson = await response.json();
      // console.log(responseJson);
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});


export default Home;


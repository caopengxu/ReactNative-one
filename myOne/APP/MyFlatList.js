// 'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

class MyFlatList extends Component {
  render () {
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    )
  }
}


const styles = StyleSheet.create({

});


export default MyFlatList;
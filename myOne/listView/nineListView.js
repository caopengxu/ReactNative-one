'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Image,
} from 'react-native';

let myJson = require('./tsconfig.json');

class nineListView extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(myJson)
    };
  }

  render() {
    return(
      <ListView
        contentContainerStyle={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this.allRow}
      />
    )
  }

  allRow = (rowData,sectionID,rowID,highlightRow) => {
    return(
      <View style={styles.cellViewStyle}>
        <Image style={styles.cellLeftImgaeStyle} source={require('../APP/icon.png')}/>
        <View>
          <Text style={styles.cellTopTextStyle}>{rowData.name}</Text>
          <Text style={styles.cellBottomTextStyle}>¥{rowData.money}</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {

  },
  listViewStyle: {
    flexDirection: 'row',
    height: 200,
    flexWrap: 'wrap'
  },
  cellViewStyle: {
    flexDirection: 'row',
    width: 150,
  },
  cellLeftImgaeStyle: {
    width: 50,
    height: 50,
  },
  cellTopTextStyle: {
    width: 100,
  },
  cellBottomTextStyle: {

  },
});

export default nineListView;





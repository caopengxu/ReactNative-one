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
let sectionJson = require('./package.json');

class myListView extends Component {
  constructor(props) {
    super(props);
    
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    let getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    let getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    };
    let sectionDs = new ListView.DataSource({
      getSectionHeaderData: getSectionData,
      getRowData: getRowData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: sectionDs
    };
  }

  render() {
    return(
      <ListView
        style={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this.allRow}
        renderSectionHeader={this.allSection}
      />
    )
  }

  allRow = (rowData,sectionID,rowID,highlightRow) => {
    return(
      <View style={styles.cellViewStyle}>
        <Image style={styles.cellLeftImgaeStyle} source={require('../APP/icon.png')}/>
        <View>
          <Text style={styles.cellTopTextStyle}>{rowData.name}</Text>
          {/*<Text style={styles.cellBottomTextStyle}>¥{rowData.money}</Text>*/}
        </View>
      </View>
    )
  };

  allSection = (sectionData, sectionID) => {
    return(
      <View>
        <Text>
          {sectionData}
        </Text>
      </View>
    )
  };

  // 复杂操作
  componentDidMount() {
    this.loadDataFromJson();
  }
  
  loadDataFromJson = () => {
    let jsonData = sectionJson.data;
    let dataBlob = {}, sectionIDs = [], rowIDs = [], cars = [];
    for (let i = 0; i < jsonData.length; i++) {
      sectionIDs.push(i);
      dataBlob[i] = jsonData[i].title;
      
      cars = jsonData[i].cars;
      rowIDs[i] = [];
      for (let j = 0; j < cars.length; j++) {
        rowIDs[i].push(j);
        dataBlob[i + ':' + j] = cars[j];
      }
    }
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
      

    })
  }
}


const styles = StyleSheet.create({
  container: {

  },
  listViewStyle: {
    height: 200,
  },
  cellViewStyle: {
    flexDirection: 'row',
  },
  cellLeftImgaeStyle: {
    width: 50,
    height: 50,
  },
  cellTopTextStyle: {

  },
  cellBottomTextStyle: {

  },
});

export default myListView;
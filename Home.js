'use strict';

import React, {Component} from 'react';
import {
  View,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';
var superheroArray = [];
class Home extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(superheroArray)
    }
  }

  componentDidMount() {
    var url = "";
    fetch(url)
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log(error));
  }

  renderRow(rowData, sectionID, rowID) {
 	return (
    	<TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
        <View>
        <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData}</Text>
        <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
    	</TouchableHighlight>
  );
}

  render() {

    return(
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}>
      </ListView>
    );
  }

}

module.exports = Home;

'use strict';

import React, {Component} from 'react';
import {
  View,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';
var productArray = [];
class Home extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(productArray),
      isLoading:true
    }
  }

  componentDidMount() {
    this.getTheData(function(json){
    productArray = json;
    this.setState = ({
      datasource:this.state.dataSource.cloneWithRows(productArray),
      isLoading:false
    })
  }.bind(this));
    
  }

  getTheData(callback) {
    var url = "https://raw.githubusercontent.com/darkarmyIN/React-Native-DynamicListView/master/appledata.json";
    fetch(url)
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log(error));
  }
  
  renderRow(rowData, sectionID, rowID) {
 	return (
    	<TouchableHighlight underlayColor='#dddddd' style={{height:44}}>
        <View>
        <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.display_string}</Text>
        <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
    	</TouchableHighlight>
  );
}

  render() {
    var currentView = (this.state.isLoading)?<View/>:<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>

    return(
      <View>
      {currentView}
      </View>
    );
  }

}

module.exports = Home;

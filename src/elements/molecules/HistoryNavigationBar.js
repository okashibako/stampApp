import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AllowBack from '../atom/AllowBack';
import headerStyle from '../../style/componentStyle/headerStyle';

class HistroyNavigationBar extends Component {
  render() {
    return (
      <View style={headerStyle.header}>
        <View style={headerStyle.navBarStyle}>
          <AllowBack/>
          <Text style={headerStyle.historyTitle}>履歴</Text>
        </View>
      </View>
    );
  }
};
export default HistroyNavigationBar;
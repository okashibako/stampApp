import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Calender from '../atom/Calender';
import headerStyle from '../../style/componentStyle/headerStyle';

class MainNavigationBar extends Component {
  render() {
    return (
      <View style={headerStyle.header}>
        <View style={headerStyle.navBarStyle}>
          <Text style={headerStyle.mainTitle}>Awesome App</Text>
          <Calender style={headerStyle.backBtn}/>
        </View>
      </View>
    );
  }
};
export default MainNavigationBar;
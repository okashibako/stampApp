import React, { Component } from 'react';
import { View, StatusBar,StyleSheet } from 'react-native';
import AllowBack from '../atom/AllowBack';

class MainNavigationBar extends Component {
  render() {
    return (
      <View style={styles.rowsComponent}>
        <View style={styles.backarrowStyle}>
          <AllowBack/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    rowsComponent: {
      backgroundColor: '#fff',  
    },
    backarrowStyle: {
      left: 10,
      top:50,
      height: 100,
    },
  });
  export default MainNavigationBar;
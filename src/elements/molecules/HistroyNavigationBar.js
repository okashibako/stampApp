import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, Text } from 'react-native';
import AllowBack from '../atom/AllowBack';

class HistroyNavigationBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.navBarStyle}>
          <AllowBack/>
          <Text style={styles.title}>履歴</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',  
      height: 70,
    },
    navBarStyle: {
      flexDirection: 'row',
      paddingTop: 20,
    },
    title: {
      flex: 1,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingRight: 30,
      fontSize:16
    },
  });
  export default HistroyNavigationBar;
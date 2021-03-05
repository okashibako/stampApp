import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, Text } from 'react-native';
import AllowBack from '../atom/AllowBack';
import Calender from '../atom/Calender';

class MainNavigationBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.navBarStyle}>
          <AllowBack style={styles.backBtn}/>
          <Text style={styles.title}>Awesome App</Text>
          <Calender style={styles.backBtn}/>
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
    backBtn: {
    },
    title: {
      flex: 1,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });
  export default MainNavigationBar;
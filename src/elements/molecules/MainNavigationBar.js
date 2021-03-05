import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, Text } from 'react-native';
import AllowBack from '../atom/AllowBack';

class MainNavigationBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.navBarStyle}>
          <AllowBack style={styles.backBtn}/>
          <Text style={styles.title}>Awesome App</Text>
          <AllowBack style={styles.backBtn}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',  
      height: 100,
    },
    navBarStyle: {
      flexDirection: 'row',
      paddingTop: 50,
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
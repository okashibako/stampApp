import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';

class MainNavigationBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.rowsComponent}>
          <TouchableWithoutFeedback onPress={() => Actions.pop()}>
            <Image source={require('../../../assets/baketu.png')}style={styles.backarrowStyle} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',  
    },
    rowsComponent: {
      backgroundColor: '#fff',  
    },
    backarrowStyle: {
      resizeMode: 'contain',
      flexDirection: 'row',
      width: 40,
      height: 40,
      left: 0,
      justifyContent: 'flex-start'
    },
  });
  export default MainNavigationBar;
import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';

class MainNavigationBar extends Component {
  render() {
    return (
      <View >
        <StatusBar />
        <View style={styles.rowsComponent}>
          <TouchableWithoutFeedback onPress={() => Actions.pop()}>
            <Image source={require('../../../assets/fish.png')}style={styles.backarrowStyle} />
          </TouchableWithoutFeedback>
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
      resizeMode: 'contain',
      flexDirection: 'row',
      width: 40,
      height: 60,
      left: 10,
      top:0,
      justifyContent: 'flex-start'
    },
  });
  export default MainNavigationBar;
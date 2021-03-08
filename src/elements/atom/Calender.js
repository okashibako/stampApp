import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Calender = () => {
  
    return (
      <TouchableWithoutFeedback onPress={() => Actions.history()}>
        <Image source={require('../../../assets/calender.png')}style={styles.calenderLogoStyle} />
      </TouchableWithoutFeedback>
    );
  };
  const styles = StyleSheet.create({
    calenderLogoStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 35,
    },
  });
  export default Calender;
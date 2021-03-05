import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

const Calender = () => {
  
    return (
      <TouchableWithoutFeedback onPress={() => console.log("open!!")}>
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
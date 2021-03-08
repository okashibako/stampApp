import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

const AllowBack = () => {
  
    return (
      <TouchableWithoutFeedback onPress={() => Actions.pop()}>
        <Image source={require('../../../assets/back.png')}style={styles.backArrowStyle} />
      </TouchableWithoutFeedback>
    );
  };
  const styles = StyleSheet.create({
    backArrowStyle: {
      resizeMode: 'contain',
      width: 30,
      height: 30,
    },
  });
  export default AllowBack;
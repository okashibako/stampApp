import React from 'react';
import { View, StyleSheet} from 'react-native';

const Bubble = () => {
  
  return (
    <View style={styles.bubble}></View>
  );
};

const styles = StyleSheet.create({
    bubble: {
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: '#fff'
    }
  });
  export default Bubble;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const CircleButton = (props) => {
  const { ButtonBase, ButtonText} = styles;
  return (
    <View>
      <TouchableOpacity style={styles.ButtonBase} onPress={props.press} ><Text style={styles.ButtonText}>{props.text}</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonBase: {
      backgroundColor: '#f7e6f0',
      justifyContent: 'center',
      alignItems: 'center',
      width:100,
      height: 100,
      borderRadius:50,
      borderWidth:0.4,
    },
  ButtonText: {
    color:'#000'
  },    
});
  export default CircleButton;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const CircleButton = (props) => {
  const { ButtonBase } = styles;
  return (
    <View>
      <TouchableOpacity style={ButtonBase} onPress={props.press} ><Text>{props.text}</Text></TouchableOpacity>
    </View>
  );
};

const styles = {
  ButtonBase: {
      backgroundColor: '#f7cc9e',
      justifyContent: 'center',
      alignItems: 'center',
      width:100,
      height: 100,
      paddingTop: 15,
      elevation: 2,
      position: 'relative',
      borderRadius:50,
      borderWidth:0.4,
    },
  };
  export default CircleButton;
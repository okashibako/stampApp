import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const CircleButton = (props) => {
  const { ButtonText, ButtonBase } = styles;
  return (
    <View style={ButtonBase}>
      <TouchableOpacity style={ButtonText} onPress={props.press} ><Text>{props.text}</Text></TouchableOpacity>
    </View>
  );
};

const styles = {
    ButtonText: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      width:100,
      height: 100,
      paddingTop: 15,
      elevation: 2,
      position: 'relative',
      borderRadius:50,
      borderWidth:1,
    },
  };
  export default CircleButton;
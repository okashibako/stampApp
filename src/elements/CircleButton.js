import React from 'react';
import { Button, View } from 'react-native';
 
const CircleButton = (props) => {
  const { ButtonText, ButtonBase } = styles;
  return (
    <View style={ButtonBase}>
      <Button style={ButtonText} title={props.text}></Button>
    </View>
  );
};

const styles = {
    ButtonBase: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 2,
      position: 'relative'
    },
    ButtonText: {
      fontSize: 20,
      fontWeight: '600'
    }
  };
  export default CircleButton;
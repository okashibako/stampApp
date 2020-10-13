import React from 'react';
import { View, Button } from 'react-native';
const GreeButton = (props) => {
  const { ButtonText, ButtonBase } = styles;
  
  return (
    <View style={ButtonBase}>
      <Button style={ButtonText} onPress={props.press} title={props.text}></Button>
    </View>
  );
};

const styles = {
    ButtonBase: {
      width:100,
      elevation: 2,
      position: 'relative',
      marginTop: 50
    },
    ButtonText: {
      fontSize: 20,
      fontWeight: '400'
    }
  };
  export default GreeButton;
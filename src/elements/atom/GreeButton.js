import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
const GreeButton = (props) => {
  
  return (
    <View style={styles.ButtonBase}>
      <Button onPress={props.press} title={props.text}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
    ButtonBase: {
      width:100,
      margin: 20
    },
  });
  export default GreeButton;
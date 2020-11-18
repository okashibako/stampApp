import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import GreeButton from '../atom/GreeButton';
import Modal from "react-native-modal";

const SelectModal = (props) => {
  
  return (
    <Modal isVisible={props.visible}>
      <View style={styles.Modaltyle}>
        <Text>このコースでよろしいですか？</Text>
        <GreeButton press={() => {props.press()}} text="はい"/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    Modaltyle: {
        width: 300,
        height:300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
  });
  export default SelectModal;
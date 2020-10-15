import React from 'react';
import { View,Text } from 'react-native';
import GreeButton from '../atom/GreeButton';
import Modal from "react-native-modal";

const SelectModal = (props) => {
  const { Modaltyle } = styles;
  
  return (
    <Modal isVisible={props.visible}>
      <View style={Modaltyle}>
        <Text>このコースでよろしいですか？</Text>
        <GreeButton press={() => {props.press()}} text="はい"/>
      </View>
    </Modal>
  );
};

const styles = {
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
  };
  export default SelectModal;
import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import Modal from "react-native-modal";

const pageStyle = {
  justifyContent: 'center',  
  flex: 1,
}
const upperButtonStyle = {
  margin: 30,  
  flexDirection: 'row',  
  justifyContent: 'space-between'  
}

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
       };
  }
  start(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    return (
    <View style={pageStyle}>
      <View style={upperButtonStyle}>
        <CircleButton press={() => {this.start()}} text="三日間コース"/>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
            <Text>Modal Content</Text>
            <Button title="Close modal" onPress={() => {this.start()}}/>
          </View>
        </Modal>
      </View>
    </View>
    );
  }
}

export default main;
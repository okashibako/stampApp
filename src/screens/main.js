import React, { Component } from 'react';
import { View,Text} from 'react-native';
import GreeButton from '../../src/elements/atom/GreeButton';
import OpningDatapicker from '../../src/components/OpningDatapicker';
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
const Modaltyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#fff"
}
class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      date: new Date(1598051730000)
       };
  }
  componentDidMount(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  start(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  dateChange(){
    this.setState({date: this.state.date});
  }
  render() {
    return (
    <View style={pageStyle}>
      <View style={upperButtonStyle}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={Modaltyle}>
            <Text>Modal Content</Text>
            <OpningDatapicker dated={this.state.date} change={() => {this.dateChange()}}/>
            <GreeButton press={() => {this.start()}} text="決定"/>
          </View>
        </Modal>
      </View>
    </View>
    );
  }
}

export default main;
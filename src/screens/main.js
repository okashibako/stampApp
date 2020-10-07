import React, { Component } from 'react';
import { View,Text} from 'react-native';
import GreeButton from '../../src/elements/atom/GreeButton';
import OpningDatapicker from '../../src/components/OpningDatapicker';
import Modal from "react-native-modal";
import mainStyle from '../../src/style/mainStyle';

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
    <View style={mainStyle.pageStyle}>
      <View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={mainStyle.Modaltyle}>
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
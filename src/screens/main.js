import React, { Component } from 'react';
import { View,Text,ImageBackground} from 'react-native';
import GreeButton from '../../src/elements/atom/GreeButton';
import OpningDatapicker from '../../src/components/OpningDatapicker';
import Modal from "react-native-modal";
import mainStyle from '../../src/style/mainStyle';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      date: new Date(),
      isModalDisplay: false
       };
  }
  componentDidMount(){
  }
  start(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ isModalDisplay: !this.state.isModalDisplay });

  }
  dateChange(e,selectedDate){
    this.setState({ isModalDisplay: false });
    console.log(selectedDate);
    this.setState({date: selectedDate});
    console.log(this.state.date)
  }
  render() {
    return (
    <View style={mainStyle.pageStyle}>
      <ImageBackground source={require('../../assets/carm_sea.jpg')} style={mainStyle.image}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={mainStyle.Modaltyle}>
            <Text>Modal Content</Text>
            <GreeButton press={() => {this.start()}} text="はい"/>
          </View>
        </Modal>
        <View style={mainStyle.DatePickerStyle}>
          {this.state.isModalDisplay ? <OpningDatapicker dated={this.state.date} change={(e,selectedDate) => {this.dateChange(e,selectedDate)}}/> : null}
        </View>
      </ImageBackground>
    </View>
    );
  }
}

export default main;
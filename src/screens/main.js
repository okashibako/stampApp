import React, { Component } from 'react';
import { View,ImageBackground} from 'react-native';
import OpningDatapicker from '../../src/components/OpningDatapicker';
import mainStyle from '../../src/style/mainStyle';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isModalDisplay: true
       };
  }
  componentDidMount(){
  }

  dateChange(e,selectedDate){
    if(selectedDate){
      this.setState({ isModalDisplay: !this.state.isModalDisplay });
      this.setState({date: selectedDate});
      console.log(this.state.date);
    } else {
      console.log("ひっぽ");
    }
  }
  render() {
    return (
    <View style={mainStyle.pageStyle}>
      <ImageBackground source={require('../../assets/carm_sea.jpg')} style={mainStyle.image}>
        <View style={mainStyle.DatePickerStyle}>
          {this.state.isModalDisplay ? <OpningDatapicker dated={this.state.date} change={(e,selectedDate) => {this.dateChange(e,selectedDate)}}/> : null}
        </View>
      </ImageBackground>
    </View>
    );
  }
}

export default main;
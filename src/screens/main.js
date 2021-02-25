import React, { Component } from 'react';
import { View,ImageBackground, StatusBar, Image} from 'react-native';
import OpningDatapicker from '../../src/components/OpningDatapicker';
import mainStyle from '../../src/style/mainStyle';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import Box from '../../src/elements/molecules/Box';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isModalDisplay: true
       };
  }
  async componentDidMount(){
    try {
      const value = await AsyncStorage.getItem('first_login');
      console.log(value);
      if (value !== null) {
        console.log(value);
      } else {
        Actions.entrance();
      }
    } catch (error) {
    }
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
      <ImageBackground source={require('../../assets/carm_sea.jpg')} style={mainStyle.image}>
        <View style={mainStyle.contents}>
        <StatusBar/>
          <View style={mainStyle.boxStyle}>
            <Box/>
          </View>
          <Image source={require('../../assets/fish.png')} />
        </View>
      </ImageBackground>
    );
  }
}

export default main;
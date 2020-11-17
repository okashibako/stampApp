import React, { Component } from 'react';
import { View,ImageBackground } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import {Actions} from 'react-native-router-flux';
import entranceStyle from '../../src/style/entranceStyle';
import SelectModal from '../elements/molecules/SelectModal';
import AsyncStorage from '@react-native-community/async-storage';

class entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
       };
  }
  start(){
    this.setState({ isModalVisible: !this.state.isModalVisible });

  }
  async apply(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    try {
      const value = await AsyncStorage.setItem('first_login', "1");
      Actions.main();
      if (value !== null) {
        // We have data!!
        Actions.main();
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }

  }
  render() {
    return (
    <View style={entranceStyle.pageStyle}>
      <ImageBackground source={require('../../assets/carm_sea.jpg')} style={entranceStyle.image}>
        <View style={entranceStyle.upperButtonStyle}>
          <CircleButton press={() => {this.start()}} text="三日間コース"/>
          <CircleButton press={() => {this.start()}} text="一週間コース"/>
          <CircleButton press={() => {this.start()}} text="一週間コース"/>
        </View>
        <SelectModal 
          visible={this.state.isModalVisible}
          press={() => {this.apply()}}
        />
      </ImageBackground>
    </View>
    );
  }
}

export default entrance;
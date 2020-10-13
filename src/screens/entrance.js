import React, { Component } from 'react';
import { View,ImageBackground } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import {Actions} from 'react-native-router-flux';
import entranceStyle from '../../src/style/entranceStyle';

class entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {
       };
  }
  start(id){
    console.log(id);
    Actions.main();
  }
  render() {
    return (
    <View style={entranceStyle.pageStyle}>
      <ImageBackground source={require('../../assets/carm_sea.jpg')} style={entranceStyle.image}>
        <View style={entranceStyle.upperButtonStyle}>
          <CircleButton press={() => {this.start(1)}} text="三日間コース"/>
          <CircleButton press={() => {this.start(2)}} text="一週間コース"/>
          <CircleButton press={() => {this.start(3)}} text="一週間コース"/>
        </View>
      </ImageBackground>
    </View>
    );
  }
}

export default entrance;
import React, { Component } from 'react';
import { View } from 'react-native';
import CircleButton from '../../src/elements/CircleButton';
import {Actions} from 'react-native-router-flux';
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
       };
  }
  start(id){
    console.log(id);
    Actions.main();
  }
  render() {
    return (
    <View style={pageStyle}>
      <View style={upperButtonStyle}>
        <CircleButton press={() => {this.start(1)}} text="三日間コース"/>
      </View>
    </View>
    );
  }
}

export default main;
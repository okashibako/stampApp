import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CircleButton from '../../src/elements/CircleButton';
 
const pageStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  paddingTop: 100
}
const fontStyle = {
  fontSize: 36,
  fontWeight: '600'
}
 
class entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {
       };
  }
  render() {
    return (
    <View style={pageStyle}>
      <Text style={fontStyle}>おおおおお</Text>
      <CircleButton text="三日間コース"/>
    </View>
    );
  }
}

export default entrance;
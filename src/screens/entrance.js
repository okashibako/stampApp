import React, { Component } from 'react';
import { View} from 'react-native';
import CircleButton from '../../src/elements/CircleButton';

const pageStyle = {
  justifyContent: 'center',  
  flex: 1,
}
const upperButtonStyle = {
  margin: 30,  
  flexDirection: 'row',  
  justifyContent: 'space-between'  
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
      <View style={upperButtonStyle}>
        <CircleButton text="三日間コース"/>
        <CircleButton text="一週間コース"/>
        <CircleButton text="一週間コース"/>
      </View>
    </View>
    );
  }
}

export default entrance;
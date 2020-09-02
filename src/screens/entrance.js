import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CircleButton from '../../src/elements/CircleButton';

const entrance = () => (
      <View style={pageStyle}>
        <Text style={fontStyle}>おおおおお</Text>
        <CircleButton />
      </View>
);
 
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
 
export default entrance;
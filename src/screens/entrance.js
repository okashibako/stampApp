import React, { useState, useEffect } from 'react';
import { View,ImageBackground } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import entranceStyle from '../../src/style/entranceStyle';
import SelectModal from '../elements/molecules/SelectModal';
function entrance({ navigation }){
  useEffect(() => {
  });
  function start(){
    navigation.navigate('main');
  }
  function apply(){
  }
    return (
    <ImageBackground source={require('../../assets/carm_sea.jpg')} style={entranceStyle.image}>
      <View style={entranceStyle.pageStyle}>
          <View style={entranceStyle.upperButtonStyle}>
            <CircleButton press={() => {start()}} text="三日間コース"/>
            <CircleButton press={() => {start()}} text="一週間コース"/>
            <CircleButton press={() => {start()}} text="一週間コース"/>
          </View>
          {/*
          <SelectModal 
            visible={this.state.isModalVisible}
            press={() => {this.apply()}}
          />
          */}
      </View>
    </ImageBackground>
    );
}

export default entrance;
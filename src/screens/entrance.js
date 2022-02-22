import React, { useState, useEffect } from 'react';
import { View,ImageBackground } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import entranceStyle from '../../src/style/entranceStyle';
import Realm from "realm";

const Schema = {
  name: "Cource",
  properties: {
    name: "string",
    data: "int?",
  },
};

function entrance({ navigation }){
    
  useEffect(() => {
    read();
  }, [])

  async function read(){
    let task;
    const realm = await Realm.open({
      path: "myCource",
      schema: [Schema],
    });
    task = realm.objects("Cource");
    if(task.length > 0){
      navigation.reset({
        index: 0,
        routes: [{ name: 'main' }],
      });
    }
  }
  async function start(){
    let data;
    const realm = await Realm.open({
      path: "myCource",
      schema: [Schema],
    });
    realm.write(() => {
      data = realm.create("Cource", { data: 2 });
    });
    navigation.reset({
      index: 0,
      routes: [{ name: 'main' }],
    });
  }
    return (
    <ImageBackground source={require('../../assets/carm_sea.jpg')} style={entranceStyle.image}>
      <View style={entranceStyle.pageStyle}>
          <View style={entranceStyle.upperButtonStyle}>
            <CircleButton press={() => {start(1)}} text="三日間コース"/>
            <CircleButton press={() => {start(2)}} text="一週間コース"/>
            <CircleButton press={() => {start(3)}} text="一週間コース"/>
          </View>
      </View>
    </ImageBackground>
    );
}

export default entrance;
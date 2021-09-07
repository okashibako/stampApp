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
  }, [])

  async function start(){
    let data;
    try{
      const realm = await Realm.open({
        path: "myCource",
        schema: [Schema],
      });
      realm.write(() => {
        data = realm.create("Cource", { name: "edorian", data: 2 });
      });
    }catch(error){
      console.log('エラー' + error.message);
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'main' }],
    });
  }
    return (
    <ImageBackground source={require('../../assets/carm_sea.jpg')} style={entranceStyle.image}>
      <View style={entranceStyle.pageStyle}>
          <View style={entranceStyle.upperButtonStyle}>
            <CircleButton press={() => {start()}} text="三日間コース"/>
            <CircleButton press={() => {start()}} text="一週間コース"/>
            <CircleButton press={() => {start()}} text="一週間コース"/>
          </View>
      </View>
    </ImageBackground>
    );
}

export default entrance;
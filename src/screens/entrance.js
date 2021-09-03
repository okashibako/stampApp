import React, { useState, useEffect } from 'react';
import { View,ImageBackground } from 'react-native';
import CircleButton from '../../src/elements/atom/CircleButton';
import entranceStyle from '../../src/style/entranceStyle';
import Realm from "realm";

const DogSchema = {
  name: "Dog",
  properties: {
    name: "string",
    age: "int?",
  },
};

function entrance({ navigation }){
    
  useEffect(() => {
    read();
  }, [])

  async function read(){
    let task;
    try{
      const realm = await Realm.open({
        path: "myDog",
        schema: [DogSchema],
      });
    task = realm.objects("Dog");
    }catch(error){
      console.log('エラー' + error.message);
    }
    if(task){
      console.log("有りです")
    } else {
      console.log("無しです")
    }
  }
  async function start(){
    let dog;
    try{
      const realm = await Realm.open({
        path: "myDog",
        schema: [DogSchema],
      });
      realm.write(() => {
        dog = realm.create("Dog", { name: "Max", age: 5, });
      });
    }catch(error){
      console.log('エラー' + error.message);
    }
    navigation.navigate('main');
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
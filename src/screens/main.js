import React,　{ useState, useEffect }from 'react';
import { View,ImageBackground, StatusBar, Image, SafeAreaView, Button} from 'react-native';
import mainStyle from '../../src/style/mainStyle';
import Box from '../../src/elements/molecules/Box';
import Realm from "realm";

const Schema = {
  name: "Cource",
  properties: {
    name: "string",
    data: "int?",
  },
};

function main({ navigation }){

  useEffect(() => {
    read();
  }, [])

  async function read(){
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => console.log("hello")} title="Update count" />
      ),
    });
    [navigation]
    let task;
    try{
      const realm = await Realm.open({
        path: "myCource",
        schema: [Schema],
      });
    task = realm.objects("Cource");
    }catch(error){
      console.log('エラー' + error.message);
    }
    if(task){
      console.log("有りです")
      console.log(task[0].name)
    } else {
      console.log("無しです")
    }
  }
    return (
      <SafeAreaView style={mainStyle.safeArea}>
        <ImageBackground source={require('../../assets/carm_sea.jpg')} style={mainStyle.image}>
          <View style={mainStyle.contents}>
          <StatusBar/>
            <View style={mainStyle.boxStyle}>
              <Box/>
            </View>
            <Image source={require('../../assets/fish.png')} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}

export default main;
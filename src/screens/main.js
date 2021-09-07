import React, { Component } from 'react';
import { View,ImageBackground, StatusBar, Image, SafeAreaView} from 'react-native';
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

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isModalDisplay: true
       };
  }
  async componentDidMount(){
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

  dateChange(e,selectedDate){
    if(selectedDate){
      this.setState({ isModalDisplay: !this.state.isModalDisplay });
      this.setState({date: selectedDate});
      console.log(this.state.date);
    } else {
      console.log("ひっぽ");
    }
  }
  render() {
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
}

export default main;
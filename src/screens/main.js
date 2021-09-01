import React, { Component } from 'react';
import { View,ImageBackground, StatusBar, Image, SafeAreaView} from 'react-native';
import mainStyle from '../../src/style/mainStyle';
import Box from '../../src/elements/molecules/Box';
class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isModalDisplay: true
       };
  }
  async componentDidMount(){
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
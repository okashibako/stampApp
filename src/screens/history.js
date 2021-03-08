import React, { Component } from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';
import historyStyle from '../../src/style/historyStyle';
import HistoryNavigationBar from '../../src/elements/molecules/HistoryNavigationBar';

class history extends Component {
  constructor(props) {
    super(props);
    this.state = {
       };
  }
  async componentDidMount(){
  }

  render() {
    return (
      <SafeAreaView style={historyStyle.safeArea}>
        <ImageBackground source={require('../../assets/carm_sea.jpg')} style={historyStyle.image}>
        <HistoryNavigationBar/>
          <View style={historyStyle.contents}>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default history;
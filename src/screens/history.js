import React, { useState } from 'react';
import {View, ImageBackground, SafeAreaView, Text, Button} from 'react-native';
import historyStyle from '../../src/style/historyStyle';

function history() {
  const [count, setCount] = useState(0);

    return (
      <SafeAreaView style={historyStyle.safeArea}>
        <ImageBackground source={require('../../assets/carm_sea.jpg')} style={historyStyle.image}>
          <View style={historyStyle.contents}>
          <Text>You clicked {count} times</Text>
          <Button onPress={() => setCount(count + 1)} title={"カウント"}>
            Click me
          </Button>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}

export default history;
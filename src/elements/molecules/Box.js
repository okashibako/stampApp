import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Bubble from '../atom/Bubble';
const Box = (props) => {
  
  return (
    <View >
      <View style={styles.container}>
        <Text>React Nativeで吹き出しUIをつくるぞおおおおおおおおおおおおおお</Text>
      </View>
      <View style={styles.bubble}><Bubble/></View>
      <View style={styles.subbubble}><Bubble/></View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    bubble: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    top: 5
    },
    subbubble: {
      justifyContent: 'center',
      alignItems: 'center',
      left: 20,
      top: 10
      }
  });
  export default Box;
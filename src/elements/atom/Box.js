import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
const Box = (props) => {
  
  return (
    <View >
      <View style={styles.container}>
        <Text>React Nativeで吹き出しUIをつくるぞおおおおおおおおおおおおおお</Text>
      </View>
      <View style={styles.bubble}/>
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
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: '#fff'
    }
  });
  export default Box;
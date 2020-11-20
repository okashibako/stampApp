import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const Box = (props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.triangle}>
        <Text>React Nativeで吹き出しUIをつくるぞおおおおおおおおおおおおおお</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',  
    },
      triangle: {
      }
  });
  export default Box;
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
      width:'80%',
      padding: 20,
      backgroundColor: '#fff',
      marginBottom: 10,
    },
      triangle: {
      }
  });
  export default Box;
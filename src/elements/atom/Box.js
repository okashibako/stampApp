import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const Box = (props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.triangle}>
        <Text>React Nativeで吹き出しUIをつくる</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 'auto',
        marginHorizontal: 'auto',
        padding: 24,
        backgroundColor: '#fff',
      },
      triangle: {
        position: 'absolute',
        top: '100%',
      }
  });
  export default Box;
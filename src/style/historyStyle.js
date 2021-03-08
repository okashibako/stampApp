import {StyleSheet} from 'react-native';

const historyStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  contents: {
    marginTop: '10%',
    padding: '10%'
  },
  boxStyle: {
    width:'auto',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
export default historyStyle;

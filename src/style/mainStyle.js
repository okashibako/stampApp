import {StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
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
  DatePickerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
export default mainStyle;

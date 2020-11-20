import {StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  contents: {
    marginTop: '25%',
    padding: '10%'
  },
  boxStyle: {
    width:'auto',
    marginBottom: 10,
    position:'relative',
  },
  DatePickerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
});
export default mainStyle;

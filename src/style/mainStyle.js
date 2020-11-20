import {StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position:'relative'
  },
  boxStyle: {
    width:'80%',
    marginBottom: 10,
    position:'relative',
    top:'25%',
    left: '8%'
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

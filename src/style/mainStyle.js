import {StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
  pageStyle: {
    justifyContent: 'center',  
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  Modaltyle: {
    width: 300,
    height:300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  DatePickerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  }
});
export default mainStyle;

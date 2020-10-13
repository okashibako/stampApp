import {StyleSheet} from 'react-native';

const entranceStyle = StyleSheet.create({
  pageStyle: {
    justifyContent: 'center',  
    flex: 1,
  },
  upperButtonStyle: {
    margin: 30,  
    flexDirection: 'row',  
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default entranceStyle;

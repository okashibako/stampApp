import {StyleSheet} from 'react-native';

const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: '#fff',  
    height: 70,
  },
  navBarStyle: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  mainTitle: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 50,
    fontSize:16
  },
  historyTitle: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 30,
    fontSize:16
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
export default headerStyle;

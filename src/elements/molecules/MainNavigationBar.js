import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';
const rightButtonConfig = {
  title: 'Save',
  tintColor: 'blue',
  handler: () => console.log('Saved'),
};
  
const titleConfig = {
  title: 'Home',
};

const MainNavigationBar = (props) => {
  
  return (
    <View>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
        leftButton={
          <Icon name="home" size={30} onPress={() => Actions.pop()} />
        }
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ADD8E6',  
    },
  });
  export default MainNavigationBar;
import React from 'react';
import Entrance from './src/screens/entrance';
import Main from './src/screens/main';
import history from './src/screens/history';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider, Button } from 'native-base';

const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
};
const theme = extendTheme({ colors: newColorTheme });
function App(){
    const Stack = createNativeStackNavigator();
    return (
        <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="entrance">
                {props => <Entrance {...props} />}
              </Stack.Screen>
              <Stack.Screen name="main"
                component={Main}>
              </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
};

export default App;
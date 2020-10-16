import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';
import main from './src/screens/main';


const App = () => (
    <Router navigationBarStyle={{ backgroundColor: '#ADD8E6' }}>
        <Scene key="root">
            <Scene key="main" initial component={main} title="main" />
            <Scene key="entrance" component={entrance} title="entrance" />
        </Scene>
    </Router>
);

export default App;
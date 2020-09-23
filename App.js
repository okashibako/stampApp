import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';
import main from './src/screens/main';


const App = () => (
    <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
        <Scene key="root">
            <Scene key="entrance" initial component={entrance} title="entrance" />
            <Scene key="main" component={main} title="main" />
        </Scene>
    </Router>
);

export default App;
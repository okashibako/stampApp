import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';


const App = () => (
    <Router>
        <Scene key="root">
            <Scene key="entrance" initial component={entrance} title="entrance" />
        </Scene>
    </Router>
);

export default App;
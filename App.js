import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';
import main from './src/screens/main';
import history from './src/screens/history';


const App = () => (
    <Router>
        <Scene key="root">
        <Scene key="entrance" initial component={entrance} title="entrance" hideNavBar/>
        <Scene key="main" component={main} title="main" hideNavBar/>
        <Scene key="history" component={history} title="history" hideNavBar/>
        </Scene>
    </Router>
);

export default App;
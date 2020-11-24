import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';
import main from './src/screens/main';
import MainNavigationBar from './src/elements/molecules/MainNavigationBar';


const App = () => (
    <Router>
        <Scene key="root">
        <Scene key="entrance" initial component={entrance} title="entrance" left={()=>null}/>
        <Scene key="main" component={main} title="main" navBar={MainNavigationBar}/>
        </Scene>
    </Router>
);

export default App;
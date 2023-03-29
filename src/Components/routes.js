import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home'
import Subscribed from './Subscribed'
import Popular from './Popular'
import Adventures from './Adventures'
import Puzzles from './Puzzle'
import Android from './Android'
import Race from './Race'
import Action from './Action'
import Strategy from './Strategy'


function Main() {
    return (
        
        <Router>

            <Route exact path="/Home" component={Home} />
            <Route exact path="/Subscribed" component={Subscribed} />
            <Route exact path="/Popular" component={Popular} />
            <Route exact path="/Adventures" component={Adventures} />
            <Route exact path="/Puzzle" component={Puzzles} />
            <Route exact path="/Android" component={Android} />
            <Route exact path='/Race' Component={Race}/>
            <Route exact path='/Action' Component={Action}/>
            <Route exact path='/Strategy' Component={Strategy}/>
        </Router>
    );
    }

export default Main;
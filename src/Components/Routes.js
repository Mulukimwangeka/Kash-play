import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        
       <Routes>
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Subscribed" element={<Subscribed/>} />
        <Route exact path="/Popular" element={<Popular/>} />
        <Route exact path="/Adventures" element={<Adventures/>} />
        <Route exact path="/Puzzle" element={<Puzzles/>} />
        <Route exact path="/Android" element={<Android/>} />
        <Route exact path='/Race' element={<Race/>} />
        <Route exact path='/Action' element={<Action/>} />
        <Route exact path='/Strategy' element={<Strategy/>} />

      </Routes>

    );
    }

export default Main;
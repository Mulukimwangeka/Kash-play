import React from "react";
import Popular from "./Popular";
import Adventures from "./Adventures";
import Action from "./Action";
import Race from "./Race";
import Puzzle from "./Puzzle";
import Android from "./Android";
import Strategy from "./Strategy";
import Subscribed from "./Subscribed";

//home component

function Home() {
    return (
        <div className="App">
        <h1>Home</h1>
{/* display home page cards */}
<div className="Popular-card">
<Popular/>
</div>

<br></br>

<div className="Subscribed-card">
    <Subscribed/>
</div>

<br></br>
<div className="Adventure-card">
    <Adventures/>
</div>

<br></br>

<div className="Action-card">
    <Action/>
</div>

<br></br>

<div className="Race-card">
    <Race/>
</div>

<br></br>

<div className="Android-card">
    <Android/>
</div>

<br></br>
<div className="Puzzle-card">
    <Puzzle/>
</div>

<br></br>

<div className="Strategy-card">
    <Strategy/>
</div>

</div>
    );
    }

export default Home;
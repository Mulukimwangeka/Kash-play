import React from "react";
import "./Styles/Popular.css"
// popular component

function Card(props) {
    return (
      <div className="card">
        <h2>{props.name}</h2>
        <p>{props.details}</p>
      </div>
    );
  }
  
  function Popular() {
    return (
      <div className="App">
        <h1>Popular</h1>
        <div className="card-container">
          <Card name="Game 1" details="Details for Game 1" />
          <Card name="Game 2" details="Details for Game 2" />
          <Card name="Game 3" details="Details for Game 3" />
        </div>
        </div>
        );
    
    }

export default Popular;
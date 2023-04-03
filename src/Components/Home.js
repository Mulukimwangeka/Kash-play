import React, { useState, useEffect } from "react";
import Popular from "./Popular";
import Adventures from "./Adventures";
import Action from "./Action";
import Race from "./Race";
import Puzzle from "./Puzzle";
import Android from "./Android";
import Strategy from "./Strategy";
import Subscribed from "./Subscribed";
import "./Styles/Home.css";

//home component

function Home() {
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setPopularGames(data));
  }, []);

  return (
    <div className="App">
      {/* <h1>Home</h1> */}
      <div className="Popular-card">
        <Popular games={popularGames} />
      </div>
      <div className="Popular-card">
        <Subscribed />
      </div>
      <div className="Popular-card">
        <Adventures />
      </div>
      <div className="Popular-card">
        <Action />
      </div>
      <div className="Popular-card">
        <Race />
      </div>
      <div className="Popular-card">
        <Android />
      </div>
      <div className="Popular-card">
        <Puzzle />
      </div>
      <div className="Popular-card">
        <Strategy />
      </div>
    </div>
  );
}

export default Home;

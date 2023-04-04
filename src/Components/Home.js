import React from "react";
import Card from "./Card";
import "./Styles/Home.css";

//home component

function Home({ games, setFavGames }) {
  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="card-container-wrapper">
        <div className="card-container">
          {games.map((game) => (
            <Card
              key={game.id}
              games={game}
              setFavGames={setFavGames}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

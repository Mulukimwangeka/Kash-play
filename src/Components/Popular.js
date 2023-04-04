import React from "react";
import "./Styles/Popular.css";
import Card from "./Card";

function Popular({ games, setFavGames }) {
  return (
    <div className="Popular">
      <h1>Popular</h1>
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

export default Popular;

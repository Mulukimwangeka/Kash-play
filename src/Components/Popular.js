import React, { useState, useEffect } from "react";
import "./Styles/Popular.css";
import Card from "./Card";

function Popular() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="Popular">
      <h1>Popular</h1>
      <div className="card-container-wrapper">
        <div className="card-container">
          {games.map((game) => (
            <Card
              key={game.id}
              name={game.name}
              details={game.details}
              charges={game.charges}
              registration={game.registration}
              image={game.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

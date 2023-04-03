import React, { useState, useEffect } from "react";
import "./Styles/Popular.css";
import Card from "./Card";

function Popular() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const games = data.map((product) => {
          return {
            id: product.id,
            name: product.title,
            image: product.image,
            details: product.description,
            redirectUrl: `https://fakestoreapi.com/products/${product.id}`,
          };
        });
        setGames(games);
      });
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
              image={game.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;

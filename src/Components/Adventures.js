import React, { useState, useEffect } from "react";
import Card from "./Card";

function Adventure() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const games = data.map((product) => {
          return {
            name: product.title,
            image: product.image,
            redirectUrl: `https://fakestoreapi.com/products}`,
          };
        });
        setGameList(games);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Adventure games</h1>
      {gameList.map((game) => (
        <Card
          key={game.name}
          name={game.name}
          details={game.details}
          image={game.image}
          redirectUrl={game.redirectUrl}
        />
      ))}
    </div>
  );
}

export default Adventure;

import React, { useState, useEffect } from "react";
import "./Styles/Popular.css";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCardClick = () => {
    setModalIsOpen(!false);
  };

  const handleCloseClick = () => {
    setModalIsOpen(!true);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>{props.details}</p>
      {modalIsOpen && (
        <div className="modal">
          <div className="popup">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <p>Details: {props.details}</p>
            <p>Charges: {props.charges}</p>
            <p>Registration details: {props.registration}</p>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Popular() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="App">
      <h1>Popular</h1>
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
  );
}

export default Popular;

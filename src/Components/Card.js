import React, { useState } from "react";
import "./Styles/Card.css";
import PaymentForm from "./PaymentForm";

function Card({games, setFavGames}) {
  console.log(games)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleCardClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handlePlayClick = () => {
    setPaymentModalIsOpen(true);
  };

  const handleCloseClick = () => {
    setModalIsOpen(false);
  };

  const handlePaymentCloseClick = () => {
    setPaymentModalIsOpen(false);
  };

  const handleAddToMyGamesClick = (games) => {
  // TODO: add game to "my games" list
    setFavGames(prev=>[...prev,games]);
    setIsAdded(true)
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="game-info">
        <img src={games?.image} alt={games?.title} className="game-image" />
        <h2 className="game-name">{games?.title}</h2>
      </div>
      <p>{games?.description}</p>
      {modalIsOpen && (
        <div className="modal">
          <div className="popup">
            <div className="game-info">
              <img src={games?.image} alt={games?.title} className="game-image" />
              <h2 className="game-name">{games?.title}</h2>
            </div>
            <p>Details: {games?.description}</p>
            <button onClick={handleCloseClick}>Close</button>
            <button onClick={handlePlayClick}>Play</button>
            {!isAdded && (
              <button onClick={()=>handleAddToMyGamesClick(games)}>Add to my games</button>
            )}
          </div>
        </div>
      )}
      {paymentModalIsOpen && (
        <div className="modal">
          <div className="popup payment-popup">
            <PaymentForm
              // redirectUrl={redirectUrl}
              onClose={handlePaymentCloseClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

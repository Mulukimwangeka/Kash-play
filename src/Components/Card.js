import React, { useState } from "react";
import "./Styles/Card.css";
import PaymentForm from "./PaymentForm";

function Card(props) {
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

  const handleAddToMyGamesClick = () => {
    // TODO: add game to "my games" list
    setIsAdded(true);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="game-info">
        <img src={props.image} alt={props.name} className="game-image" />
        <h2 className="game-name">{props.name}</h2>
      </div>
      <p>{props.details}</p>
      {modalIsOpen && (
        <div className="modal">
          <div className="popup">
            <div className="game-info">
              <img src={props.image} alt={props.name} className="game-image" />
              <h2 className="game-name">{props.name}</h2>
            </div>
            <p>Details: {props.details}</p>
            <button onClick={handleCloseClick}>Close</button>
            <button onClick={handlePlayClick}>Play</button>
            {!isAdded && (
              <button onClick={handleAddToMyGamesClick}>Add to my games</button>
            )}
          </div>
        </div>
      )}
      {paymentModalIsOpen && (
        <div className="modal">
          <div className="popup payment-popup">
            <PaymentForm
              redirectUrl={props.redirectUrl}
              onClose={handlePaymentCloseClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

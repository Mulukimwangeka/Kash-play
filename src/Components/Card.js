import React, { useState } from "react";
import "./Styles/Card.css";
import PaymentForm from "./PaymentForm";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);

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
            <button onClick={handlePlayClick}>Play</button>
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

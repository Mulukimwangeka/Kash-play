import React, { useState } from "react";

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCardClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCloseClick = () => {
    setModalIsOpen(false);
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

export default Card;

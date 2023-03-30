import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Action() {
  const [actionData, setActionData] = useState([]);
  const [selectedAction, setSelectedAction] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setActionData(data));
  }, []);

  const handleCardClick = action => {
    setSelectedAction(action);
  };

  const handleCloseClick = () => {
    setSelectedAction(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedAction) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected action game is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedAction.id);

    if (!alreadyInGames) {
      // Add the selected action game to the user's games.
      games.push(selectedAction);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedAction(null);
  };

  return (
    <div>
      <h1>Action Games</h1>
      <div className="card-container">
        {actionData.map((action, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(action)}>
            <h2>{action.name}</h2>
            <img src={action.image} alt={action.name} />
            <p>{action.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedAction && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedAction.name}</h2>
            <img src={selectedAction.image} alt={selectedAction.name} />
            <p>{selectedAction.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Action;

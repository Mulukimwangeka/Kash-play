import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Strategy() {
  const [strategyData, setStrategyData] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setStrategyData(data));
  }, []);

  const handleCardClick = strategy => {
    setSelectedStrategy(strategy);
  };

  const handleCloseClick = () => {
    setSelectedStrategy(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedStrategy) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected strategy game is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedStrategy.id);

    if (!alreadyInGames) {
      // Add the selected strategy game to the user's games.
      games.push(selectedStrategy);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedStrategy(null);
  };

  return (
    <div>
      <h1>Strategy Games</h1>
      <div className="card-container">
        {strategyData.map((strategy, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(strategy)}>
            <h2>{strategy.name}</h2>
            <img src={strategy.image} alt={strategy.name} />
            <p>{strategy.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedStrategy && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedStrategy.name}</h2>
            <img src={selectedStrategy.image} alt={selectedStrategy.name} />
            <p>{selectedStrategy.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Strategy;

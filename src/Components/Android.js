import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Android() {
  const [androidData, setAndroidData] = useState([]);
  const [selectedAndroid, setSelectedAndroid] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setAndroidData(data));
  }, []);

  const handleCardClick = android => {
    setSelectedAndroid(android);
  };

  const handleCloseClick = () => {
    setSelectedAndroid(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedAndroid) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected android game is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedAndroid.id);

    if (!alreadyInGames) {
      // Add the selected android game to the user's games.
      games.push(selectedAndroid);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedAndroid(null);
  };

  return (
    <div>
      <h1>Android Games</h1>
      <div className="card-container">
        {androidData.map((android, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(android)}>
            <h2>{android.name}</h2>
            <img src={android.image} alt={android.name} />
            <p>{android.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedAndroid && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedAndroid.name}</h2>
            <img src={selectedAndroid.image} alt={selectedAndroid.name} />
            <p>{selectedAndroid.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Android;

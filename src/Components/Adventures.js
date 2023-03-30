import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Adventure() {
  const [adventureData, setAdventureData] = useState([]);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setAdventureData(data));
  }, []);

  const handleCardClick = adventure => {
    setSelectedAdventure(adventure);
  };

  const handleCloseClick = () => {
    setSelectedAdventure(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedAdventure) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected adventure is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedAdventure.id);

    if (!alreadyInGames) {
      // Add the selected adventure to the user's games.
      games.push(selectedAdventure);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedAdventure(null);
  };

  return (
    <div>
      <h1>Adventure</h1>
      <div className="card-container">
        {adventureData.map((adventure, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(adventure)}>
            <h2>{adventure.name}</h2>
            <img src={adventure.image} alt={adventure.name} />
            <p>{adventure.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedAdventure && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedAdventure.name}</h2>
            <img src={selectedAdventure.image} alt={selectedAdventure.name} />
            <p>{selectedAdventure.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adventure;

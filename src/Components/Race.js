import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Race() {
  const [raceData, setRaceData] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setRaceData(data));
  }, []);

  const handleCardClick = race => {
    setSelectedRace(race);
  };

  const handleCloseClick = () => {
    setSelectedRace(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedRace) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected race is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedRace.id);

    if (!alreadyInGames) {
      // Add the selected race to the user's games.
      games.push(selectedRace);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedRace(null);
  };

  return (
    <div>
      <h1>Race</h1>
      <div className="card-container">
        {raceData.map((race, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(race)}>
            <h2>{race.name}</h2>
            <img src={race.image} alt={race.name} />
            <p>{race.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedRace && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedRace.name}</h2>
            <img src={selectedRace.image} alt={selectedRace.name} />
            <p>{selectedRace.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Race;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Puzzle() {
  const [puzzleData, setPuzzleData] = useState([]);
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setPuzzleData(data));
  }, []);

  const handleCardClick = puzzle => {
    setSelectedPuzzle(puzzle);
  };

  const handleCloseClick = () => {
    setSelectedPuzzle(null);
  };

  const handleAddToGamesClick = () => {
    if (!selectedPuzzle) return;

    // Get the user's games from local storage or create a new array if it doesn't exist.
    const games = JSON.parse(localStorage.getItem('games')) || [];

    // Check if the selected puzzle is already in the user's games.
    const alreadyInGames = games.some(game => game.id === selectedPuzzle.id);

    if (!alreadyInGames) {
      // Add the selected puzzle to the user's games.
      games.push(selectedPuzzle);

      // Update the user's games in local storage.
      localStorage.setItem('games', JSON.stringify(games));
    }

    setSelectedPuzzle(null);
  };

  return (
    <div>
      <h1>Puzzle</h1>
      <div className="card-container">
        {puzzleData.map((puzzle, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(puzzle)}>
            <h2>{puzzle.name}</h2>
            <img src={puzzle.image} alt={puzzle.name} />
            <p>{puzzle.details}</p>
            <button>Play</button>
          </div>
        ))}
      </div>
      {selectedPuzzle && (
        <div className="modal">
          <div className="popup">
            <h2>{selectedPuzzle.name}</h2>
            <img src={selectedPuzzle.image} alt={selectedPuzzle.name} />
            <p>{selectedPuzzle.details}</p>
            <button onClick={handleAddToGamesClick}>Add to my games</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Puzzle;

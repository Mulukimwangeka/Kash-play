import React, { useState, useEffect } from 'react';

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
    // TODO: Implement the logic for adding the puzzle to the user's games category.
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

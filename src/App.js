import React from 'react';
import './App.css';
import cartoon from "./Images/cartoon.jpg"

function App() {

  return (
    <div className="App">
    {/* navbar container */}
      <div className="navbar-container">
        <div className="navbar">
        <h1>Kashplay</h1>

      </div>
      </div>

      {/* Home container */}
        <div className="home-container">
          {/* Home image*/}
          <div className='home-image-container'>
            <img src={cartoon} alt="cartoon" className='home-image'/>
          </div>
        </div>

      {/* buttons container */}
      <div className="buttons-container">
        <button className="button">Home</button>
        <button className="button">My Games</button>
        <button className="button">Popular</button>
        <button className="button">Adventures</button>
        <button className="button">Puzzles</button>
        <button className="button">Race</button>
        <button className="button">Action</button>
        <button className="button">Strategy</button>
        <button className="button">Android games</button>

      </div>

      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <h2 className='footer-header'>Connect With Us</h2>
          
       
          <p>&copy; 2023 kashyka. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


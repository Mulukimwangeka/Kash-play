import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import cartoon from "./Images/kash.png"
// define routes

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
          <img src={cartoon} alt="cartoon" className='home-image' />
        </div>
      </div>

      {/* buttons container */}

      <div className="buttons-container">


        <Link to="/Home" ><button className="button">Home</button></Link>
        <Link to="/Subscribed" ><button className="button">My Games</button></Link>
        <Link to="/Popular" ><button className="button">Popular</button></Link>
        <Link to="/Adventures" ><button className="button">Adventures</button></Link>
        <Link to="/Puzzle" ><button className="button">Puzzles</button></Link>
        <Link to="/Race" ><button className="button">Race</button></Link>
        <Link to="/Action" ><button className="button">Action</button></Link>
        <Link to="/Strategy" ><button className="button">Strategy</button></Link>
        <Link to="/Android" ><button className="button">Android games</button></Link>
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


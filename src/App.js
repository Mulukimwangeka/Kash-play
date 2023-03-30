import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Routes';
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
      {/* Nav and Main components import for routes */}
      <Nav></Nav>
      <Main></Main>

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


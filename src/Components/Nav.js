import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <div>
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
        </div>
    )
}

export default Nav
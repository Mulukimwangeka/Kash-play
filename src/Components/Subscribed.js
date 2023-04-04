import React from "react";
import Card from "./Card";

function Subscribed({ games }) {
    // console.log(props)
    return (
        <div className="App">
            <h1>Subscribed</h1>
            {games.map(game =>
            (
                <Card
                    key={game.id}
                    games={game}
                    setFavGames={()=>{}}
                />
            )
            )}
        </div>
    );
}

export default Subscribed
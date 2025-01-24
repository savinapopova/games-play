import {useEffect, useState} from "react";
import {getThreeRecentGames} from "../../api/gamesApi.js";
import Game from "../Game";

export default function Home() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getThreeRecentGames()
            .then(games => setGames(games))
            .catch(err => console.error(err));


    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

                <div id="home-page">
                    <h1>Latest Games</h1>

                    {games.length > 0
                        ? games.map(game =>
                    <Game {...game} key={game._id}/>
                    )
                    : <p className="no-articles">No games yet</p>
                    }
                </div>
        </section>
    );
}

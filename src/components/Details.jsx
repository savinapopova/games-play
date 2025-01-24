import {getGameById} from "../api/gamesApi.js";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


export default function Details({isUserLoggedIn}) {

    const [game, setGame] = useState({});
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        getGameById(id)
            .then(game => {
                console.log(game);
                setGame(game);
            })
            .catch(err => alert(err));
    }, [id]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl}/>
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {isUserLoggedIn
                ? <div className="buttons">
                        <Link to={'/games/edit/' + id} className="button">Edit</Link>
                        <a href="#" className="button">Delete</a>
                    </div>
                : null
                }


            </div>
        </section>
    );
}

import {useEffect, useState} from "react";
import {getAllGames} from "../api/gamesApi.js";
import CatalogueItem from "./CatalogueItem.jsx";

export default function Catalogue() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames()
            .then(games => setGames(games))
            .catch(err => alert(err));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
             {/*Display div: with information about every game (if any)*/}
            {games.length > 0
                ? games.map(game =>
                   <CatalogueItem {...game} key={game._id}/>
                )
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}

import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {createGame, editGame, getGameById} from "../api/gamesApi.js";
import {validateGame} from "../utils.js";

export default function Edit() {

    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: 1,
        imageUrl: '',
        summary: ''
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getGameById(id)
            .then(game => {
                console.log(game);
                setGame(game);
            })
            .catch(err => alert(err));
    }, [id]);

    const submitGameHandler = (e) => {
        e.preventDefault();
        console.log("EditGameHandler");

        try {
            const editedGame = validateGame({...game});
            editGame(editedGame, id)
                .then(res => {
                    console.log(res);
                    navigate('/games');
                });
        } catch (e) {
            return alert(e.message);
        }
    }

    const changeHandler = (e) => {
        let {name, value} = e.target;

        if (name === 'maxLevel') {
            value = Number(value);
        }

        setGame(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(game);
    }


    return (
        <section id="edit-page" className="auth">
            <form onSubmit={submitGameHandler} id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title"
                           value={game.title} onChange={changeHandler}/>

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category"
                               value={game.category} onChange={changeHandler}/>

                            <label htmlFor="levels">MaxLevel:</label>
                            <input type="number" id="maxLevel" name="maxLevel" min="1"
                                   value={game.maxLevel} onChange={changeHandler}/>

                                <label htmlFor="game-img">Image:</label>
                                <input type="text" id="imageUrl" name="imageUrl"
                                       value={game.imageUrl} onChange={changeHandler}/>

                                    <label htmlFor="summary">Summary:</label>
                                    <textarea name="summary" id="summary"
                                    value={game.summary} onChange={changeHandler}
                                    ></textarea>
                                    <input className="btn submit" type="submit" value="Edit Game"/>

                </div>
            </form>
        </section>
    );
}

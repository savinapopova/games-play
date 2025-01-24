import {useState} from "react";
import {validateGame} from "../utils.js";
import {createGame} from "../api/gamesApi.js";
import {useNavigate} from "react-router-dom";

export default function Create() {

    const initialFormData = {
        title: '',
        category: '',
        maxLevel: 1,
        imageUrl: '',
        summary: ''
    };

    const [game, setGame] = useState(initialFormData);
    const navigate = useNavigate();

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

    const createGameHandler = (e) => {
        e.preventDefault();

        console.log("CreateGameHandler");

        try {
            const newGame = validateGame({...game});
            createGame(newGame)
                .then(res => {
                    console.log(res);
                    navigate('/');
                });
        } catch (e) {
            return alert(e.message);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={(e) => {createGameHandler(e)}}
                id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."
                    value={game.title} onChange={changeHandler}
                    />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter game category..."
                        value={game.category} onChange={changeHandler}
                        />

                            <label htmlFor="levels">MaxLevel:</label>
                            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"
                            value={game.maxLevel} onChange={changeHandler}
                            />

                                <label htmlFor="game-img">Image:</label>
                                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."
                                value={game.imageUrl} onChange={changeHandler}
                                />

                                    <label htmlFor="summary">Summary:</label>
                                    <textarea name="summary" id="summary"
                                    value={game.summary} onChange={changeHandler}
                                    ></textarea>
                                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
    );
}

import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {validateLoginrUser} from "../utils.js";
import {loginUser} from "../api/userAPI.js";

export default function Login({logUser}) {

    const navigate = useNavigate();

    const initialUser = {
        email: '',
        password: ''
    };

    const [user, setUser] = useState(initialUser);

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const loginUserHandler = (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const newUser = validateLoginrUser({...user});
            loginUser(newUser)
                .then(res => {
                    console.log(res);
                    localStorage.setItem('user', JSON.stringify(res));
                    logUser(true);
                    navigate('/');
                });
        } catch (e) {
            return alert(e.message);
        }
    };



    return (
        <section id="login-page" className="auth">
            <form onSubmit={loginUserHandler} id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"
                    value={user.email} onChange={changeHandler}
                    />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password"
                        value={user.password} onChange={changeHandler}
                        />
                            <input type="submit" className="btn submit" value="Login"/>
                                <p className="field">
                                    <span>If you don't have profile click <Link to={'/register'}>here</Link></span>
                                </p>
                </div>
            </form>
        </section>
    );
}

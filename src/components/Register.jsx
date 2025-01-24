import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {validateRegisterUser} from "../utils.js";
import {registerUser} from "../api/userAPI.js";

export default function Register({logUser}) {

    const navigate = useNavigate();

    const initialUser = {
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [user, setUser] = useState(initialUser);



    const registerSubmitHandler = (event) => {
        event.preventDefault();

        console.log('User: ' + user);
        let newUser;
       try {
             newUser  = validateRegisterUser(user);
           registerUser(newUser)
               .then(res => {
                   console.log(res);
                   localStorage.setItem('user', JSON.stringify(res));
                   logUser(true);
                   navigate('/');
               });
       } catch (e) {
           return alert(e.message);
       }

        console.log('New User: ' + newUser);



    };

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }


    return (
        <section id="register-page" className="content auth">
            <form onSubmit={(event) => registerSubmitHandler(event)} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com"
                    value={user.email} onChange={changeHandler}
                    />

                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password"
                        value={user.password} onChange={changeHandler}
                        />

                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input type="password" name="confirmPassword" id="confirm-password"
                            value={user.confirmPassword} onChange={changeHandler}
                            />

                                <input className="btn submit" type="submit" value="Register"/>

                                    <p className="field">
                                        <span>If you already have profile click <Link to={'/login'}>here</Link></span>
                                    </p>
                </div>
            </form>
        </section>
    );
}

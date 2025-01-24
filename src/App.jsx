import Header from "./components/header/Header.jsx";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/header/Home";
import Catalogue from "./components/Catalogue";
import {useState} from "react";
import {registerUser} from "./api/userAPI.js";
import Details from "./components/Details.jsx";

function App() {



    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'));

    const logUser = (state) => {
        setIsUserLoggedIn(state);
    }



  return (
    <>
      <Header isUserLoggedIn={isUserLoggedIn} logUser={logUser}/>
        <main>
            <Routes>

                {<Route path="/" element={<Home />} />}
                {<Route path="/games" element={<Catalogue />} />}
                {<Route path="/login" element={<Login logUser={logUser}/>} />}
                {<Route path="/register" element={<Register logUser={logUser}/>} />}
                {<Route path="/create" element={<Create logUser={logUser}/>} />}
                {<Route path="/games/edit/:id" element={<Edit logUser={logUser}/>} />}
                {<Route path="/games/:id" element={<Details isUserLoggedIn={isUserLoggedIn} logUser={logUser}/>} />}

            </Routes>
        </main>
    </>
  )
}

export default App

import GuestUsersNav from "./GuestUsersNav.jsx";
import LoggedUsersNav from "./LoggedUsersNav.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {logoutUser} from "../../api/userAPI.js";

export default function Header({isUserLoggedIn, logUser}) {

    const navigate = useNavigate();

    const onLogout = () => {

        logoutUser()
            .then(res => {
                localStorage.clear();
                logUser(false);

            })
            .catch(err => alert(err));
    };



  return (
      <header>
          {/*Navigation*/}
          <h1><Link className="home" to={'/'}>GamesPlay</Link></h1>
          <nav>
              <Link to={'/games'}>All games</Link>

              {isUserLoggedIn
                  ? <LoggedUsersNav onLogout={onLogout}/>
                  : <GuestUsersNav />
              }
          </nav>
      </header>
  )
}

import {Link} from "react-router-dom";

export default function LoggedUsersNav({onLogout}) {

    const logoutHandler = () => {
        onLogout();
    }

    return (
        <div id="user">
            <Link to={'/create'}>Create Game</Link>
            <Link onClick={logoutHandler} to={'/'}>Logout</Link>
        </div>
    )
}

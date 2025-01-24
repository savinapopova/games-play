import {Link} from "react-router-dom";

export default function GuestUsersNav() {
    return (
    <div id="guest">
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </div>
  )
}

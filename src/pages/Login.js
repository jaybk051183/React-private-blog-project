import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return(
        <>
        <h1>Login pagina</h1>
        <h2>Druk op de knop om in the loggen!</h2>
        <button id="login-button"><Link to="/blogposts">Login</Link></button>
        </>
    )
}

export default Login;
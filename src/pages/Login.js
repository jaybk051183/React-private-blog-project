import React from "react";
import { useHistory } from 'react-router-dom';
import users from '../data/users.json';

function Login({toggleAuthenticated}) {
    const history = useHistory();
    function handleClick() {
        toggleAuthenticated(true);
        history.push("/blogposts");

    }
    return(
        <section>
        <h1>Login pagina</h1>
        <h2>Druk op de knop om in the loggen!</h2>
            <input type="text" onSubmit={toggleAuthenticated}/>
            <input type="text" onSubmit={toggleAuthenticated}/>
        <button
            type="button"
            onClick={handleClick}>
            Login
        </button>
        </section>
    )
}
export default Login;



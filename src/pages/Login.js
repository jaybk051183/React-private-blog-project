import React from "react";
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    function handleClick() {
        history.push("/blogposts");
    }
    return(
        <>
        <h1>Login pagina</h1>
        <h2>Druk op de knop om in the loggen!</h2>
        <button
            type="button"
            onClick={handleClick}>
            Login
        </button>
        </>
    )
}
export default Login;



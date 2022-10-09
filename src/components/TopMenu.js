import React from "react";
import {NavLink, useHistory} from "react-router-dom";

function TopMenu({isAuthenticated, toggleAuthenticated}) {
    const history = useHistory();

    function logOut(){
        toggleAuthenticated(false);
        history.push("/")
    }

    return(
        <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    {isAuthenticated ===true ?
                        <>
                            <li>
                                <NavLink to="/blogposts" activeClassName="active-link">Blogoverview</NavLink>
                            </li>
                            <li>
                                <button type="button" onClick={logOut}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                        :
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>}
                </ul>
        </nav>
    );

}

export default TopMenu;
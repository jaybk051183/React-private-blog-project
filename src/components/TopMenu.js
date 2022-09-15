import React from "react";
import {NavLink} from "react-router-dom";

function TopMenu() {
    return(
        <nav>
            <div className="nav-container">
                <h4>Bloggingplatform</h4>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link" Home></NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-overview" exact activeClassName="active-link">Blogoverview</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-post" exact activeClassName="active-link">Blogpost</NavLink>
                    </li>

                </ul>


            </div>

        </nav>

    )

}

export default TopMenu;
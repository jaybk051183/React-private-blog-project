import React from "react";
import JSONArray from '../data/posts.json';
import { Link } from "react-router-dom";

function Blogoverview() {

    return(
        <div>
            <h1>Blog overzichtpagina</h1>
            <h2>Aantal blogposts: {JSONArray.length}</h2>
            <ul>
                {JSONArray.map((posts)=>{
                return <li>
                    <Link to={"/blogposts/"`${posts.id}`}>{posts.title}</Link>
                </li>
                })
                }

            </ul>

        </div>

    )

}

export default Blogoverview;
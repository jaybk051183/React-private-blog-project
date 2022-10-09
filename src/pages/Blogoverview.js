import React from "react";
import Array from '../data/posts.json';
import { Link } from "react-router-dom";

function Blogoverview() {
    return(
        <section>
            <h1>Blog overzichtpagina</h1>
            <h2>Aantal blogposts: {Array.length}</h2>
            <ol>
                {Array.map((posts) => {
                return <li key={posts.id}>
                    <Link to={`blog/${posts.id}`}>{posts.title}</Link>
                </li>
                })}
            </ol>
        </section>
    )
}
export default Blogoverview;
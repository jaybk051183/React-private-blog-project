import React from "react";
import { useParams, Link } from "react-router-dom";
import Array from '../data/posts.json';

function Blogpost() {
    const { blogId } = useParams();
    const currentPosts = Array.find((post)=>{
        return post.id === blogId;
    });
    console.log(currentPosts);
    return (
        <>
        <article>
           <h1>{currentPosts.title}</h1>
           <h3>{currentPosts.date}</h3>
           <p>{currentPosts.content}</p>
        </article>
            <article>
                <Link to="/">Terug naar homepage</Link>
            </article>
        </>
    );
}
export default Blogpost;

import React from 'react';
import {Link, useParams} from "react-router-dom";
import './Blogpost.css';
import posts from '../../data/posts.json';


function Blogpost() {
    const {id} = useParams();
    const currentPost = posts.find((post) => {
        return post.id === id
    });
    return (
        <>
            <article className="blog-article">
                <h1>{currentPost.title}</h1>
                <h3>{currentPost.date}</h3>
                <p>{currentPost.content}</p>
            </article>

            <div className="blog-article">
                <Link to="/">Terug naar Home</Link>
            </div>
        </>
    );
}

export default Blogpost;
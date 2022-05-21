import React from 'react';
import posts from '../../data/posts.json';
import './Blog-overview.css';
import { Link } from "react-router-dom";


function BlogOverview() {
    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h3>Aantal blogposts: {posts.length} </h3>
            <section>
                <ul>
                    {posts.map((blogPost) => {
                        return <li key={blogPost.id}>
                            <Link to={`blogposts/${blogPost.id}`}>{blogPost.title}</Link>
                        </li>
                })}
                </ul>
            </section>
        </>
    );
}

export default BlogOverview;
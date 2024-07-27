// src/app/blogpost/[slug]/page.js

import React from 'react';
import { notFound } from 'next/navigation';
import styles from "../Blogpost.module.css";

async function fetchBlog(slug) {
    const res = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch blog');
    }
    return res.json();
}

export default async function Slug({ params }) {
    const { slug } = params;

    try {
        const blog = await fetchBlog(slug);

        if (!blog) {
            notFound(); // Redirect to 404 if the blog is not found
        }

        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1><b>{blog.title}</b></h1>
                    <hr />
                    <p><b>{blog.content}</b></p>
                    <hr />
                    <hr />
                    <p><b>Author : {blog.author}</b></p>
                </main>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error: {error.message}</div>;
    }
}

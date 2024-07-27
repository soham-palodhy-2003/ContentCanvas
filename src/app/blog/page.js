// src/app/blog/page.js

import React from 'react';
import styles from "../blog/Blog.module.css";
import Link from 'next/link';

async function fetchBlogs() {
  const response = await fetch("http://localhost:3000/api/blogs");
  if (!response.ok) {
    throw new Error("Error fetching blogs");
  }
  return response.json();
}

export default async function Blog() {
  const blogs = await fetchBlogs();

  return (
    <div className={styles.blogs}>
      {blogs.map((blogitem) => (
        <div key={blogitem.slug} className={styles.blogitem}>
            <h3>{blogitem.title}</h3>
            <p>{blogitem.content.substr(0, 180)}...</p>
            <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
        </div>
      ))}
    </div>
  );
}

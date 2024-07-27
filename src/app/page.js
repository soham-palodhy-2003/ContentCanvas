"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const hardcodedBlogs = [
  {
    title: "Understanding Python",
    author: "Alice Johnson",
    content: "Python is known for its simplicity and readability...",
    slug: "how-to-learn-python",
  },
  {
    title: "Getting Started with Cloud Computing",
    author: "John Doe",
    content: "Cloud computing provides scalable resources over the internet...",
    slug: "getting-started-with-cloud-computing",
  },
  {
    title: "Mastering Data Structures",
    author: "Jane Smith",
    content: "Data structures are essential for efficient data management...",
    slug: "how-to-learn-ds",
  },
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.appTitle}>ContentCanvas</h1>
          <hr />
          <hr />
          <div className={styles.imageContainer}>
            <Image src="/homeimg.avif" alt="Hunting Coders" width={400} height={200} className={styles.appImage} />
          </div>
        </section>
        <section className={styles.description}>
          <p>Craft your story, share your voice</p>
        </section>

        <div className={styles.blogs}>
          <h2 className={styles.h2}>Popular Blogs</h2>
          {hardcodedBlogs.map((blog) => (
            <div key={blog.slug} className={styles.blogitem}>
              <h3>{blog.title}</h3>
              <p className={styles.p}>{blog.content.substring(0, 100)}...</p>
              <Link href={`/blogpost/${blog.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

'use client'

import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About ContentCanvas</h1>
      <div className={styles.content}>
        <p>
          Welcome to ContentCanvas, your go-to platform for insightful and informative blog posts. Our mission is to provide valuable content that inspires, educates, and entertains our readers.
        </p>
        <h2 className={styles.subHeader}>Our Team</h2>
        <p>
          Our dedicated team of writers and editors work tirelessly to bring you fresh, relevant content every week. We believe in the power of information and aim to empower our readers through well-researched and engaging articles.
        </p>
        <h2 className={styles.subHeader}>Get In Touch</h2>
        <p>
          We love hearing from our readers! Whether you have a question, feedback, or just want to say hello, feel free to <a href="/contact" className={styles.link}>contact us</a>.
        </p>
      </div>
    </div>
  );
}

export default About;

'use client'

import React, {useState} from 'react'
import styles from "../contact/contact.module.css";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {name, email, desc,phone};

    fetch('http://localhost:3000/api/postcontact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log("Success", data);
      alert('Thanks for contacting us.');
      setName("");
      setEmail("");
      setDesc("");
      setPhone("");
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };
  const handleChange = (e)=>{
    if(e.target.name === 'name'){
      setName(e.target.value);
    }
    else if(e.target.name === 'email'){
      setEmail(e.target.value);
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value);
    }
    else if(e.target.name === 'phone'){
      setPhone(e.target.value);
    }
  }
  
  return (
    <div className={styles.container}>
      <h1 className = {styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>Enter Your Name </label>
          <input type="text" value={name} onChange={handleChange} className={styles.formControl} id="name" name = 'name' aria-describedby="nameHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>Email address</label>
          <input type="email" value = {email} onChange={handleChange} className={styles.formControl} id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formLabel}>Description</label>
          <textarea type="desc" value = {desc} onChange={handleChange} className={styles.formControlDesc} id="desc" placeholder="Leave your message here" name='desc' aria-describedby="descHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>Phone No: </label>
          <input type="phone" value={phone} onChange={handleChange} className={styles.formControl} id="phone" name = 'phone' />
        </div>
        <button type="submit" className={styles.btnPrimary}>Submit</button>
      </form>
    </div>
  )
}

export default contact

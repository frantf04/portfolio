import React, {useState } from 'react'
import styles from '../css/Contact.module.css'
// import Button from '../../../common/Button'
// import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'





function Contact({ link = 'Enviar' }) {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const online = navigator.onLine;



  const formsubmit = (e) => {
    e.preventDefault();
    // https://github.com/github/fetch
    fetch("https://formsubmit.co/ajax/frantf04@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        email: email,
        message: message
      })
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mesaje enviado correctamente.',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        if (!online) {
          Swal.fire(
            'Error de conexion?',
            'Revise su conexion a internet',
            'question'
          )
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Uups! ha ocurrido un error.',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log(error);
      });
    
    setName('')
    setEmail('')
    setMessage('')

  }


  return (
    <div className={styles.contact}>
      <h3 className={styles.titulo}>Hablemos</h3>
      <form onSubmit={formsubmit} name='myForm' action="https://formsubmit.co/frantf04@gmail.com" method="POST" className={styles.form}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.required} htmlFor="firstName"> Nombre</label>
            <input onChange={(e) => setName(e.target.value)} value={name} name="firstName" type="text" id='firstName' required />
          </div>
          <div className={styles.col}>
            <label className={styles.required} htmlFor="lastName"> Apellido</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" type="text" id='lastName' required />
          </div>
        </div>
        <div className={styles.col}>
          <label className={styles.required} htmlFor="email"> Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" id='email' required />
        </div>
        <div className={styles.col}>
          <label htmlFor="message">mensaje</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
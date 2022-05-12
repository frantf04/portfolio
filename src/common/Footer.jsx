import React from 'react'
import styles from './css/Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>
            © 2022 by Johan Olmos.</p>
          <p>Creado con <a className={styles.react_link} href="https://reactjs.org/" target="_blank">React</a></p>
        </div>
        <div className={styles.contact_container}>
          <div className={styles.call}>
            <h4 className={styles.title}>Llámame</h4>
            <p>+1 (849) 876-4788</p>
          </div>
          <div className={styles.write}>
            <h4 className={styles.title}>Escríbeme</h4>
            <p>Johantf04@gmail.com</p>
          </div>
          <div className={styles.folow}>
            <h4 className={styles.title}>Sígueme</h4>
            <p>
              <a target='_blank' href="https://www.facebook.com/profile.php?id=100004261665261"><i className="fa fa-facebook"></i></a>
              <a target='_blank' href="https://www.instagram.com/_fran_tf/"><i className="fa fa-instagram"></i></a>
              <a target='_blank' href="https://github.com/frantf04"><i className="fa fa-github"></i></a>
              <a target='_blank' href="https://www.linkedin.com/in/johan-olmos-6bb436225/"><i className="fa fa-linkedin"></i></a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
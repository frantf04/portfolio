import React from 'react'
import img from '../../../assets/img/yo.jfif'
import styles from '../css/Presentation_card.module.css'
import CV from '../../../assets/CV.pdf'
import Button from '../../../common/Button'


function presentation_card() {
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={img} alt="" />
      </div>
      <div className={styles.name_container}>
        <p>Johan</p>
        <p>Olmos</p>
      </div>
      <div className={styles.div}></div>
      <div className={styles.btn_container}>
        {/* <Button download={CV} link={CV} text="DESCARGAR CV" bg='#f00' border="#f00" color="#fff"/> */}
        <a download={CV} href={CV}>DESCARGAR CV</a>
        <Button link="/work" text="PROYECTOS" bg='transparent' color="#000"/>
        
      </div>
      <h3>Dsarrollador Front-end</h3>
      <div className={styles.social}>
        <a target='_blank'href="https://www.facebook.com/profile.php?id=100004261665261"><i className="fa fa-facebook"></i></a>
        <a target='_blank'href="https://www.instagram.com/_fran_tf/"><i className="fa fa-instagram"></i></a>
        <a target='_blank'href="https://github.com/frantf04"><i className="fa fa-github"></i></a>
        <a target='_blank'href="https://www.linkedin.com/in/johan-olmos-6bb436225/"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default presentation_card

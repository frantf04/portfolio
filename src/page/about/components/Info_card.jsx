import React from 'react'
import CV from '../../../assets/JFOCV.pdf'
import Button from '../../../common/Button'
import styles from '../css/Info_card.module.css'

function Info_card() {
  return (

    <div className={styles.info_card}>
      <div className={styles.titles_container}>
        <h1>Hola!</h1>
        <h2>Quién soy y que hago?</h2>
      </div>
      <div className={styles.btn_container}>
        <a className={styles.btn} download={CV} href={CV}>DESCARGAR CV</a>
        <Button className={styles.btn} link="/works" text="PROYECTOS" bg='transparent' color="#000" />

      </div>
      <div className={styles.p_container}>
        <p>
        Soy un apasionado Desarrollador web con más de 3 años de experiencia en el campo. Mi principal enfoque está en crear experiencias digitales excepcionales utilizando las últimas tecnologías y mejores prácticas.
        </p>
        <p>React\Javascript: Estos lenguajes de programación son mi fuerte. Con ellos, he creado aplicaciones web interactivas y dinámicas incluyendo este portafolio.</p>
      </div>
    </div>
  )
}

export default Info_card

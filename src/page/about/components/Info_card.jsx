import React from 'react'
import CV from '../../../assets/CV.pdf'
import Button from '../../../common/Button'
import styles from '../css/Info_card.module.css'

function Info_card() {
  return (

    <div className={styles.info_card}>
      <div className={styles.titles_container}>
        <h1>HOLA</h1>
        <h2>Quién soy y que hago?</h2>
      </div>
      <div className={styles.btn_container}>
        <a className={styles.btn} download={CV} href={CV}>DESCARGAR CV</a>
        <Button className={styles.btn} link="/works" text="PROYECTOS" bg='transparent' color="#000" />

      </div>
      <div className={styles.p_container}>
        <p>Desarrollador Front-end con mas de 2 años de experiencia. Los
          lenguajes de programación que más domino incluyen:
          React\Javascript, me considero una persona muy aplicada y
          con capacidad para detectar y solucionar problemas.
 </p>
        <p>En este
          momento estoy buscando un trabajo que me permita seguir
          ampliando mi experiencia, aprender de grandes profesionales
          y asumir nuevas responsabilidades.</p>
      </div>
    </div>
  )
}

export default Info_card

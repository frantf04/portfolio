import React from 'react'
import styles from '../css/About.module.css'
import Info_card from './Info_card'
import Presentation_card from './Presentation_card'

function About() {
  return (
    <>
      {/* <Loader/> */}
      <div className={styles.container}>
        <div className={styles.cards_container}>
          <Presentation_card />
          <Info_card />
        </div>
      </div>
    </>
  )
}

export default About

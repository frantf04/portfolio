import React from 'react'
import styles from '../css/SkillCard.module.css'

function SkillCard({text, name}) {
  return (
    <div className={styles.card}>

      <div className={styles.card_tag}>
        {name}
      </div>
        <i className={text}></i>
    </div>
  )
}

SkillCard.defaultProps = {
  name: 'name'
}

export default SkillCard
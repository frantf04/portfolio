import React from 'react'
import styles from '../css/SkillCard.module.css'

function SkillCard({ text, name, arrow }) {
  
  const remove = ()=> {
    arrow.current.classList.add(styles.noactive)
  }

  return (
    <div  onMouseOver={remove} className={styles.card}>
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
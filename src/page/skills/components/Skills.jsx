import React from 'react'
import styles from '../css/Skills.module.css'
import SkillCard from './SkillCard'
function Skills() {
  return (
    <div className={styles.container}>
        <h2>HABILIDADES</h2>
      <div className={styles.skills_container}>
        <SkillCard text="fa fa-html5" name="html" />
        <SkillCard text="fa fa-css3" name="css" />
        <SkillCard text="fab fa-sass" name="sass" />
        <SkillCard text="fab fa-js" name="javaScript" />
        <SkillCard text="fab fa-react" name="react" />
        <SkillCard text="fab fa-git-alt" name="Git" />
        <SkillCard text="fab fa-github" name="github" />
        <SkillCard text="fab fa-npm" name="npm" />


      </div>
    </div>
  )
}

export default Skills
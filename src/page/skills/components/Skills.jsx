import React, { useRef } from 'react'
import styles from '../css/Skills.module.css'
import SkillCard from './SkillCard';
import sql from '../../../assets/img/sql-server.png'
function Skills() {

  const refArrow = useRef()


  return (
    <div className={styles.container}>
        <h2>HABILIDADES</h2>
      <div className={styles.skills_container}>
        <SkillCard arrow={refArrow}  text="fa fa-html5" name="html" />
        <SkillCard arrow={refArrow}  text="fa fa-css3" name="css" />
        <SkillCard arrow={refArrow}  text="fab fa-sass" name="sass" />
        <SkillCard arrow={refArrow}  text="fab fa-js" name="javaScript" />
        <SkillCard arrow={refArrow}  text="fab fa-react" name="react" />
        <SkillCard arrow={refArrow}  text="fab fa-git-alt" name="Git" />
        <SkillCard arrow={refArrow}  text="fab fa-github" name="github" />
        <SkillCard arrow={refArrow}  text="fab fa-npm" name="npm" />
        <SkillCard arrow={refArrow}  text="fab fa-node-js" name="node.js" />
        {/* <SkillCard arrow={refArrow}  text="fab fa-node-js" name="node.js" /> */}
        <SkillCard arrow={refArrow}  text="fas fa-database" name="MySQL" />
        <SkillCard arrow={refArrow} text="fas fa-server" name="Sql-server"/>
        {/* <SkillCard arrow={refArrow} text="fab fa-node" name="node-js"/> */}
        <span ref={refArrow} className={styles.arrow_guide}><span>
        {window.screen.width > 1024? 'Mouse over' : 'Click'}
        </span><i className="fa fa-arrow-down"></i></span>

      </div>
    </div>
  )
}

export default Skills
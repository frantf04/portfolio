import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/Header.module.css'

function Header() {

  const refAbout = useRef()
  const refSkills = useRef()
  const refWorks = useRef()
  const refContact = useRef()
  const refNav = useRef()

  const active = () => {
    if (window.location.href.includes('skills')) {
      refAbout.current.classList.remove(styles.active)
      refSkills.current.classList.add(styles.active)
      refWorks.current.classList.remove(styles.active)
      refContact.current.classList.remove(styles.active)
    }
    else if (window.location.href.includes('works')) {
      refWorks.current.classList.add(styles.active)
      refAbout.current.classList.remove(styles.active)
      refSkills.current.classList.remove(styles.active)
      refContact.current.classList.remove(styles.active)
    }
    else if (window.location.href.includes('contact')) {
      refContact.current.classList.add(styles.active)
      refWorks.current.classList.remove(styles.active)
      refAbout.current.classList.remove(styles.active)
      refSkills.current.classList.remove(styles.active)
    }
    else {
      refAbout.current.classList.add(styles.active)
      refSkills.current.classList.remove(styles.active)
      refWorks.current.classList.remove(styles.active)
      refContact.current.classList.remove(styles.active)
    }
  }

  useEffect(() => {
    active()
  }, [])

  const navActive = (e) => {
    if (refNav.current.classList.contains('fa-bars')) {
      refNav.current.classList.remove('fa-bars')
      refNav.current.classList.add('fa-times')

    } else {
      refNav.current.classList.remove('fa-times')
      refNav.current.classList.add('fa-bars')

    }
    e.target.parentNode.parentNode.children[1].classList.toggle(styles.active)
    document.body.classList.toggle(styles.active)
  }



  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <span className={styles.header_logo}>
            Johan Olmos
          </span>
        </Link>
        <nav onClick={active} className={styles.header_nav}>
          <Link ref={refAbout} onClick={navActive} className={styles.active} to='/'>SOBRE MI</Link>
          <Link ref={refSkills} onClick={navActive} to='/skills'>HABILIDADES</Link>
          <Link ref={refWorks} onClick={navActive} to='/works'>PROYECTOS</Link>
          <Link ref={refContact} onClick={navActive} to='/contact'>CONTACTAME</Link>
        </nav>
        <span onClick={navActive} className={styles.menuBarBtn}><i ref={refNav} className="fas fa-bars"></i></span>
      </header>


    </>
  )
}

export default Header;

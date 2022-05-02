import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/Header.module.css'

function Header() {
  
  const refNav = useRef()
  function active(e) {
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove(styles.active)
      e.target.classList.add(styles.active)

    }
  }

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
        <nav onClick={active}  className={styles.header_nav}>
          {/* <Link  to='/'>Home</Link> */}
          <Link onClick={navActive} className={styles.active} to='/'>SOBRE MI</Link>
          <Link onClick={navActive} to='/work'>PROYECTOS</Link>
          <Link onClick={navActive} to='/contact'>CONTACTAME</Link>
        </nav>
        <span onClick={navActive} className={styles.menuBarBtn}><i ref={refNav} className="fas fa-bars"></i></span>
      </header>


    </>
  )
}

export default Header

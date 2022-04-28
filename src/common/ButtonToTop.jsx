import React, { useEffect, useRef } from 'react'
import styles from './css/ButtonToTop.module.css'

function ButtonToTop() {
  const btnTop = useRef()


  useEffect(() => {

    document.addEventListener('scroll', () => {
      if (obtenerScroll() > 325) {
        btnTop.current.classList.add(styles.active)
      } else {
        btnTop.current.classList.remove(styles.active)
        
      }
    })
  })

  const obtenerScroll = () => document.documentElement.scrollTop;
  
  const toTop = () => {
    if (obtenerScroll() > 0) {
      requestAnimationFrame(toTop)
      document.documentElement.scrollTo(0, obtenerScroll() - (obtenerScroll() / 5))
    }
    return
  }
  


  return (
    <div onClick={toTop} ref={btnTop} className={styles.ButtonToTop}> <i className="fa fa-sort-up"></i> </div>
  )
}

export default ButtonToTop
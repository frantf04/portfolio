import React from 'react'
import styles from '../css/WorkCard.module.css'
// import img1 from '../../../assets/img/yo.jfif'

function WorkCard({ link, img, title, desc, order }) {




  return (
    <>
      <a className={styles.card} href={link} target="_blank">

        <div className={styles.info_container} >
          <h5>{title}</h5>
          <p> {desc} </p>
        </div>
        <div className={styles.img_container}>
          <img src={img} alt="" />
        </div>

      </a>
    </>
  )
}

WorkCard.defaultProps = {
  title: 'Name',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident illo quam ducimus ut odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident illo quam ducimus ut odit?'

}

export default WorkCard

import React from 'react'
import styles from '../css/Work.module.css'
import WorkCard from './WorkCard'
import img1 from '../../../assets/img/aquinotech.png';
import img2 from '../../../assets/img/calculos.png';
import img3 from '../../../assets/img/peliculas.png';
import img4 from '../../../assets/img/generatepassword.png';


function Work() {

  const workInfo = [
    {
      name: 'Aquino Tech',
      desc: 'Pagina en la cual se ofrece el servicio de raparación de dispositivo moviles, cuenta con un formulario donde puede solicitar una  reparacion a domicilio.',
      img: img1,
      link: 'https://aquinotech.do/'
    },
    {
      name: 'Peliculas',
      desc: 'Una pagina en la cual encuentras los detalles  de las peliculas mas populares en la actualidad.',
      img: img3,
      link: 'https://jo-moviesdetails.herokuapp.com/'
    },

    {
      name: 'Generador de contraseñas',
      desc: 'Un sistema en cual podras generar contraseñas cien por ciento aleatorias y segura; Elije la cantidad de digitos, los caracteres con los cuales quieres generar tu contraseña.',
      img: img4,
      link: 'https://generatepassword-johan-olmos.netlify.app/'
    },

    {
      name: 'Calculos simples',
      desc: 'Pagina en la cual puedes realizar cualquier calculos simples que requiera de las operaciones basicas (suma, resta, multiplicacion y division). ',
      img: img2,
      link: 'https://calculos-simples.netlify.app/'
    },

  ]
  // const [cardContainer, setCardContainer] = useState([])

  // if (window.screen.width < 900) {
  //   workInfo.length = workInfo.length - 1;
  // }
  // if (window.screen.width < 480) {
  //   workInfo.length = workInfo.length - 3;
  // }


  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>PROYECTOS</h3>
        <p className={styles.first_text}>Una pequeña galeria de proyectos rencientes creados por mi.</p>
        <div className={styles.cards_container}>

          {workInfo.map(card => {

            return <WorkCard key={card.link} title={card.name ? card.name : undefined} desc={card.desc ? card.desc : undefined} link={card.link} img={card.img} />
          }
          )}
        </div>
      </div>
    </>
  )
}

export default Work
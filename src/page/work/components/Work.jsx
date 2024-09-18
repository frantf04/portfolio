import React from "react";
import styles from "../css/Work.module.css";
import WorkCard from "./WorkCard";
import aquinotech from "../../../assets/img/aquinotech.png";
import aquinotech1 from "../../../assets/img/aquinotech1.png";
import aquinotech2 from "../../../assets/img/aquinotech2.png";
import aquinotech3 from "../../../assets/img/aquinotech3.png";
import bricaaya from "../../../assets/img/bricaaya.png";
import bricaaya1 from "../../../assets/img/bricaaya1.png";
import bricaaya2 from "../../../assets/img/bricaaya2.png";
import bricaaya3 from "../../../assets/img/bricaaya3.png";
import bricaaya4 from "../../../assets/img/bricaaya4.png";
import bricaaya5 from "../../../assets/img/bricaaya5.png";
import bricaaya6 from "../../../assets/img/bricaaya6.png";
import bricaaya7 from "../../../assets/img/bricaaya7.png";
import jfobetrace from "../../../assets/img/jfobetrace.png";
import jfobetrace1 from "../../../assets/img/jfobetrace1.png";
import jfobetrace2 from "../../../assets/img/jfobetrace2.png";
import jfobetrace3 from "../../../assets/img/jfobetrace3.png";
import jfobetrace4 from "../../../assets/img/jfobetrace4.png";
import jfobetrace5 from "../../../assets/img/jfobetrace5.png";
import genpass from "../../../assets/img/genpass.png";
import genpass1 from "../../../assets/img/genpass1.png";
import jfobetterminal from "../../../assets/img/jfobetterminal.png";
import jfobetterminal1 from "../../../assets/img/jfobetterminal1.png";
import jfobetterminal2 from "../../../assets/img/jfobetterminal2.png";
import jfobetterminal3 from "../../../assets/img/jfobetterminal3.png";
import jfobetterminal4 from "../../../assets/img/jfobetterminal4.png";
import jfobetbackoffice from "../../../assets/img/jfobetbackoffice.png";
import jfobetbackoffice1 from "../../../assets/img/jfobetbackoffice1.png";
import jfobetbackoffice2 from "../../../assets/img/jfobetbackoffice2.png";
import jfobetbackoffice3 from "../../../assets/img/jfobetbackoffice3.png";
import jfobetbackoffice4 from "../../../assets/img/jfobetbackoffice4.png";
import jfobetbackoffice5 from "../../../assets/img/jfobetbackoffice5.png";
import jfobetbackoffice6 from "../../../assets/img/jfobetbackoffice6.png";
import movie from "../../../assets/img/movie.png";
import movie1 from "../../../assets/img/movie1.png";
import movie2 from "../../../assets/img/movie2.png";
import typing from "../../../assets/img/typing.png";
import typing1 from "../../../assets/img/typing1.png";
import note from "../../../assets/img/note.png";
import note1 from "../../../assets/img/note1.png";
import note2 from "../../../assets/img/note2.png";
import note3 from "../../../assets/img/note3.png";
import  { Bounce } from "react-awesome-reveal";
const dominio = "jfodev.com";

export const workInfo = [
  {
    name: "Bricaaya System",
    shortdesc:
      "Sistema para gestionar inventarios, ventas y facturación. Incluye un panel de control  para administradores, donde se registra cada actividad, como el registro de productos, ventas y la gestión de usuarios.",
    desc: "Sistema integral diseñado para la gestión de inventarios, ventas y facturación. Está dirigido a administradores, quienes pueden tener un control total del sistema mediante un panel. Entre las funcionalidades principales, se incluye el registro de productos, la administración de ventas y la gestión de usuarios. Además, existe un registro detallado de actividades que permite a los administradores monitorear las acciones realizadas en el sistema.",
    img: [
      bricaaya,
      bricaaya1,
      bricaaya2,
      bricaaya3,
      bricaaya4,
      bricaaya5,
      bricaaya6,
      bricaaya7,
    ],
    link: "/works/bricaaya",
    externalLink: "https://bricaaya-system.vercel.app/",
    tecnologies: ["React", "nodeJs", "Axios", "JWT", "mongoDB", "CSS3"],
    github: "https://github.com/frantf04/Bricaaya-System",
    feature: [""],
  },
  {
    name: "Aquino Tech",
    shortdesc:
      "Pagina en la cual se ofrece el servicio de raparación de dispositivo moviles, cuenta con un formulario donde puede solicitar una  reparacion a domicilio.",
    desc: "Página web que ofrece servicios de reparación de dispositivos móviles. Los usuarios pueden solicitar una reparación a domicilio mediante un formulario simple y accesible. El diseño de la página es moderno y adaptado para facilitar la experiencia del cliente a la hora de agendar reparaciones.",
    img: [aquinotech, aquinotech1, aquinotech2, aquinotech3],
    link: "/works/aquinotech",
    externalLink: 'https://aquinotech.do/',
    tecnologies: ["HTML5", "CSS3", "Sass", "Javascript"],
    github: "https://github.com/frantf04/Aquino-Tech-page",
    feature: [""],
  },
  {
    name: "JFOBET TERMINAL",
    shortdesc:
      "Interfaz donde los operadores realizan las apuestas. Los jugadores pueden seleccionar juegos como carreras de galgos o caballos, hacer sus apuestas, y pagar mediante efectivo.",
    desc: "Una interfaz diseñada para que los operadores de apuestas realicen sus transacciones de forma sencilla y rápida. Los usuarios pueden apostar en carreras de galgos o caballos, seleccionar los juegos de su interés, hacer sus apuestas y pagar de forma efectiva en la terminal, manteniendo siempre el flujo de las operaciones a través de la plataforma.",
    img: [jfobetterminal, jfobetterminal1, jfobetterminal2, jfobetterminal3, jfobetterminal4],
    link: "/works/terminal",
    tecnologies: ["React", "nodeJs", "JWT", "Axios", "mongoDB", "socket IO", "CSS3"],
    feature: [""],
  },
  {
    name: "JFOBET BACKOFFICE",
    shortdesc:
      "Sistema para administrar y controlar el funcionamiento de la plataforma de apuestas. Aquí se gestiona la configuración de los juegos, estadísticas, pagos, informes financieros y las apuestas realizadas. ",
    desc: "Sistema diseñado para que los administradores controlen el funcionamiento interno de una plataforma de apuestas. Esta interfaz permite gestionar las configuraciones de los juegos, ver estadísticas detalladas, administrar pagos y finanzas, así como generar informes sobre las apuestas realizadas.",
    img: [jfobetbackoffice, jfobetbackoffice1, jfobetbackoffice2, jfobetbackoffice3, jfobetbackoffice4, jfobetbackoffice5, jfobetbackoffice6],
    link: "/works/backoffice",
    tecnologies: ["React", "nodeJs", "JWT", "Axios", "mongoDB", "socket IO", "CSS3"],
    feature: [""],
  },
  {
    name: "JFOBET CARRERAS",
    shortdesc:
      "Esta es la interfaz donde los usuarios pueden ver los eventos deportivos virtuales, como las carreras de galgos y caballos. transmite videos  de competiciones pregrabadas en un ciclo continuo y en tiempo real.",
    desc: "Interfaz donde los usuarios pueden ver eventos deportivos virtuales en tiempo real, como las carreras de galgos o caballos. El sistema transmite videos en directo y permite realizar apuestas mientras se siguen los eventos. Además, integra competiciones pregrabadas que siguen un ciclo continuo, ofreciendo una experiencia fluida y sin interrupciones.",
    img: [jfobetrace, jfobetrace1, jfobetrace2, jfobetrace3, jfobetrace4, jfobetrace5],
    link: "/works/carreras",
    tecnologies: ["React", "nodeJs", "JWT", "Axios", "mongoDB", "socket IO", "CSS3"],
    feature: [""],
  },
  {
    name: "Peliculas",
    shortdesc:
      "Una pagina en la cual encuentras los detalles  de las peliculas mas populares en la actualidad.",
    desc: "Página web sencilla que ofrece información detallada sobre las películas más populares en la actualidad. Los usuarios pueden navegar por las diferentes fichas de películas, consultar sinopsis, reparto y otra información relevante.",
    img: [movie, movie1, movie2],
    link: `/works/peliculas`,
    externalLink: `https://movies.${dominio}/`,
    tecnologies: ["React", "CSS3", "Axios"],
    github: "https://github.com/frantf04/web-peliculas",
    feature: [""],
  },

  {
    name: "GENPASS",
    shortdesc:"Un sistema en cual podras generar contraseñas cien por ciento aleatorias y segura; Elije la cantidad de digitos, los caracteres con los cuales quieres generar tu contraseña.",
    desc: "Página web sencilla que ofrece información detallada sobre las películas más populares en la actualidad. Los usuarios pueden navegar por las diferentes fichas de películas, consultar sinopsis, reparto y otra información relevante.",
    img: [genpass, genpass1],
    link: "/works/genpass",
    externalLink: `https://genpass.${dominio}`,
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    github: "https://github.com/frantf04/Generador-de-contrase-a",
    feature: [""],
  },
  {
    name: "NOTE",
    shortdesc:
      "Una web de notas que te permite escribir y guardar tus apuntes en un abrir y cerrar de ojos.",
    desc: "Aplicación web simple donde los usuarios pueden crear, escribir y guardar notas de forma rápida. Ofrece una experiencia fluida que permite agregar notas con un solo clic y acceder a ellas fácilmente para revisarlas o editarlas en cualquier momento.",
    img: [note, note1, note2, note3],
    link: "/works/note",
    externalLink: `https://note.${dominio}`,
    github: "https://github.com/frantf04/note",
    feature: [""],
    tecnologies: ["React", "nodeJs", "mongoDB", "CSS3"],
  },
  {
    name: "TYPING",
    shortdesc:
      "Test de velocidad: Realiza un emocionante desafío para ver cuán rápido puedes escribir en 60 segundos.",
    desc: "Un test de velocidad de escritura que desafía a los usuarios a escribir lo más rápido posible en un tiempo limitado de 60 segundos. Ofrece una manera divertida de practicar y mejorar la velocidad y precisión al escribir.",
    img: [typing, typing1],
    link: "/works/typing",
    externalLink: `https://typing.${dominio}`,
    github: "https://github.com/frantf04/typing",
    tecnologies: ["HTML5", "CSS3", "JavaScript"],
    feature: [""],
  },
  // {
  //   name: 'Clock',
  //   desc: `un programa de tiempo que ofrece la hora actual, cronometro y temporizador.
  //   `,
  //   img: img7,
  //   link: `https://clock.${dominio}`,
  //   tecnologies: ['React, nodeJs,  mongoDB, CSS3']
  // },

  // {
  //   name: 'Calculos simples',
  //   desc: 'Pagina en la cual puedes realizar cualquier calculos simples que requiera de las operaciones basicas (suma, resta, multiplicacion y division). ',
  //   img: img2,
  //   link: 'https://calculos-simples.netlify.app/',
  //   tecnologies: ['React, nodeJs,  mongoDB, CSS3']
  // },
];

function Work() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>PROYECTOS</h3>
        <p className={styles.first_text}>
          Una pequeña galeria de los ultimos proyectos creados por mi.
        </p>
        <div className={styles.cards_container}>
          <Bounce delay={0} >
            {workInfo.map((card, index) => {
              return (
                <WorkCard key={index} delay={index * 100} cardInfo={card} />
              );
            })}
          </Bounce>
        </div>
      </div>
    </>
  );
}

export default Work;

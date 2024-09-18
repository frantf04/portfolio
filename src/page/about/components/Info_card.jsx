import React, { useCallback } from "react";
import CV from "../../../assets/JFOCV.pdf";
import Button from "../../../common/Button";
import styles from "../css/Info_card.module.css";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Bounce } from "react-awesome-reveal";

function Info_card() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div className={styles.info_card}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        width="100"
        height="100"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className={styles.text_container}>
        <Bounce>
          <div className={styles.titles_container}>
            <p>Hola, mi nombre es</p>
            <h1>Johan Olmos</h1>
          </div>
          <div className={styles.subtitles_container}>
            <h2>
              Desarrollador Fullstack JavaScript <br /> [STACK MERN] 
            </h2>
          </div>
          <div className={styles.p_container}>
            <p>
              Transformo ideas en aplicaciones web modernas y eficientes. Mi
              pasión es crear soluciones tecnológicas con React, Node.js y
              MongoDB.
            </p>
          </div>
          <div className={styles.btn_container}>
            <Button
              link="/contact"
              text="CONTACTO"
              color="#0a192f"
              bg="#64ffda"
            />
            <a className={styles.btn} download={CV} href={CV}>
              DESCARGAR CV
            </a>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Info_card;

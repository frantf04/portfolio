import React from "react";
import styles from "../css/WorkCard.module.css";
import Button from "../../../common/Button";
// import img1 from '../../../assets/img/yo.jfif'
import { Bounce, Fade } from "react-awesome-reveal";
import { Link, useLocation } from "react-router-dom";

function WorkCard({ cardInfo = {}, delay = 0 }) {
  const location = useLocation();
  return (
    // <Bounce cascade delay={delay}>
      <div className={styles.card}>
        <header>
          <span>
            <i className="far fa-folder"></i>
          </span>
          <div className={styles.links}>
            {cardInfo?.github != undefined ? (
              <span title="github">
                <a href={cardInfo?.github}>
                  <i className="fab fa-github"></i>
                </a>
              </span>
            ) : null}
            {cardInfo.link != undefined ? (
              <span title="Ver detalles">
                <Link
                  target={cardInfo?.link.includes("http") ? "_blank" : null}
                  to={cardInfo?.link}
                >
                  <i className="fas fa-external-link-alt"></i>
                </Link>
              </span>
            ) : null}
          </div>
        </header>
        <h5>{cardInfo?.name}</h5>
        <p>{cardInfo?.shortdesc}</p>
        <footer>
          <p>
            {cardInfo?.tecnologies?.map((tecnology, index, array) => {
              return tecnology + `${array.length !== index + 1 ? " | " : " "}`;
            })}
          </p>
        </footer>
      </div>
    // </Bounce>
  );
}

export default WorkCard;

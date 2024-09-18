import React, { useState } from "react";
import styles from "../css/WorkDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { workInfo } from "./Work";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../common/Button";
function WorkDetails() {
  const { name } = useParams();
  const [currentImg, setCurrentImg] = useState(null);
  const [imgIsOpen, setImgIsOpen] = useState(false);
  const currentData = workInfo.filter((work) => {
    console.log(work?.link.split("/")[1]);
    return work?.link?.split("/")[2].toLowerCase() === name.toLowerCase();
  })[0];

  let settings = {
    arrows: true,
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.cantainer}>
      <div className={styles.text}>
        <h1>{currentData.name}</h1>
        {/* <p>2021</p> */}
      </div>
      <div className={styles.desc}>
        <Link to={"/works"}>
          <span>
            <i className="fas fa-arrow-left"></i>
          </span>
        </Link>
        <br />
        <br />
        <h2>{currentData.name}</h2>
        <p>{currentData.desc}</p>
        <h2>Tecnologias</h2>
        <p>
          {currentData.tecnologies?.map((tecnology, index, array) => {
            return tecnology + `${array.length !== index + 1 ? " | " : " "}`;
          })}
        </p>
        <br />
        {currentData?.externalLink && (
          <a target="_blank" className="active" href={currentData.externalLink}>
            Ir al sitio
          </a>
        )}
      </div>
      <div className={styles.carousel}>
        <Carousel {...settings}>
          {currentData.img?.map((img, index) => {
            return (
              <img
                onClick={() => {
                  setCurrentImg(img);
                  setImgIsOpen(true);
                }}
                key={index}
                src={img}
                alt=""
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default WorkDetails;

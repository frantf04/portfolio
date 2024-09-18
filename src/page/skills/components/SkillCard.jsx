import React from "react";
import styles from "../css/SkillCard.module.css";
import { Bounce } from "react-awesome-reveal";

function SkillCard({ text, name, arrow, svg }) {
  const remove = () => {
    arrow.current.classList.add(styles.noactive);
  };

  return (
      <div onMouseOver={remove} className={styles.card}>
        <div className={styles.card_tag}>{name}</div>
        {svg ? svg : <i className={text}></i>}
      </div>
  );
}

SkillCard.defaultProps = {
  name: "name",
};

export default SkillCard;

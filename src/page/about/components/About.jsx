import React from "react";
import styles from "../css/About.module.css";
import Info_card from "./Info_card";
import Work from "../../work/components/Work";
import Skills from "../../skills/components/Skills";
import Contact from "../../contact/components/Contact";
// import Presentation_card from './Presentation_card'

function About() {
  const from = 2020;
  const current_year = new Date().getFullYear();
  const YEARS_OF_EXPERIENCES = current_year - from;
  return (
    <>
      {/* <Loader/> */}
      <div className={styles.container}>
        <Info_card />
      </div>
     
    </>
  );
}

export default About;

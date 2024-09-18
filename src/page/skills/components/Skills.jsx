import React, { useRef } from "react";
import styles from "../css/Skills.module.css";
import SkillCard from "./SkillCard";
import { ReactComponent as MongoDBIcon } from "../../../assets/img/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg";
import { ReactComponent as PostgreSqlIcon } from "../../../assets/img/postgresql-logo-svgrepo-com.svg";
import { ReactComponent as SocketIOIcon } from "../../../assets/img/socket-io-svgrepo-com.svg";
import { ReactComponent as JWTIcon } from "../../../assets/img/jsonwebtokens-svgrepo-com.svg";
import { ReactComponent as PostmanIcon } from "../../../assets/img/postman-svgrepo-com.svg";
import { Bounce } from "react-awesome-reveal";
function Skills() {
  const refArrow = useRef();

  return (
    <div className={styles.container}>
      <h2>HABILIDADES</h2>
      <div className={styles.skills_container}>
        <Bounce>
          <SkillCard arrow={refArrow} text="fa fa-html5" name="html" />
          <SkillCard arrow={refArrow} text="fa fa-css3" name="css" />
          <SkillCard arrow={refArrow} text="fab fa-sass" name="sass" />
          <SkillCard arrow={refArrow} text="fab fa-js" name="javaScript" />
          <SkillCard arrow={refArrow} text="fab fa-react" name="react" />
          <SkillCard arrow={refArrow} text="fab fa-node-js" name="node.js" />
          <SkillCard
            arrow={refArrow}
            svg={<SocketIOIcon fill="#ccd6f6" style={{ width: "80%" }} />}
            name="Socket IO"
          />
          <SkillCard
            arrow={refArrow}
            svg={<MongoDBIcon style={{ width: "90%" }} />}
            name="Mongo DB"
          />
          <SkillCard arrow={refArrow} text="fas fa-database" name="SQL" />
          <SkillCard
            arrow={refArrow}
            svg={<PostgreSqlIcon style={{ width: "80%" }} height={"80%"} />}
            name="Postgres SQL"
          />

          <SkillCard arrow={refArrow} text="fas fa-server" name="Sql-server" />

          <SkillCard arrow={refArrow} text="fab fa-git-alt" name="Git" />
          <SkillCard arrow={refArrow} text="fab fa-github" name="github" />
          <SkillCard arrow={refArrow} text="fab fa-npm" name="npm" />
          <SkillCard
            arrow={refArrow}
            svg={<JWTIcon fill="#ccd6f6" width={"80%"} height={"80%"} />}
            name="JWT"
          />
          <SkillCard
            arrow={refArrow}
            svg={<PostmanIcon fill="#ccd6f6" width={"80%"} height={"80%"} />}
            name="Postman"
          />

        </Bounce>
          <span ref={refArrow} className={styles.arrow_guide}>
            <span>{window.screen.width > 1024 ? "Mouse over" : "Click"}</span>
            <i className="fa fa-arrow-down"></i>
          </span>
      </div>
    </div>
  );
}

export default Skills;

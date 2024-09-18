import React from "react";
import styles from "./css/SocialLink.module.css";
import { Bounce } from "react-awesome-reveal";

const SocialLinks = () => {
  return (
    <aside className={styles.socialLinks}>
      <Bounce cascade>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/frantf04">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/johan-olmos/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/_johan_tf/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100004261665261">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/_johan_tf">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <ul>
            <div className={styles.line}></div>
          </ul>
        </ul>
      </Bounce>
    </aside>
  );
};

export default SocialLinks;

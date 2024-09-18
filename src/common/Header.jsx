import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./css/Header.module.css";
import { Context } from "../App";
import Hamburger from "hamburger-react";

function Header() {
  const refNav = useRef();
  const { scroll } = useContext(Context);
  const [isSticky, setIsSticky] = useState(false);
  const [navIsActive, setNavIsActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Estado para dirección del scroll
  let lastScrollTop = useRef(0); // Usar useRef para mantener el valor entre renders

  const navActive = (e) => {
    setNavIsActive(false);
    // console.log(navIsActive)
    // refNav.current.classList.toggle(styles.active);
    document.body.classList.toggle(styles.active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop.current) {
        setIsScrollingUp(false); // Scroll hacia abajo
      } else {
        setIsScrollingUp(true); // Scroll hacia arriba
      }
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ""} ${
        isScrollingUp ? styles.show : styles.hide
      }`}
    >
      <Link to="/">
        <span className={styles.header_logo}>Portafolio</span>
      </Link>
      <nav ref={refNav} className={`${styles.header_nav} ${navIsActive?styles.active: ""}`}>
        <NavLink onClick={navActive} to="/">
          Inicio
        </NavLink>
        <NavLink onClick={navActive} to="/skills">
          Habilidades
        </NavLink>
        <NavLink onClick={navActive} to="/works">
          Proyectos
        </NavLink>
        <NavLink onClick={navActive} to="/contact">
          Contactos
        </NavLink>
      </nav>
      <span className={styles.menuBarBtn}>
        {/* <i ref={refNav} className="fas fa-bars"></i> */}
        <Hamburger
          size={30}
          color={"#64ffda"}
          toggled={navIsActive}
          toggle={setNavIsActive}
          rounded
          label="Toggle menu"
        />
      </span>
    </header>
  );
}

export default Header;

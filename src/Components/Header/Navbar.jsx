import React from "react";

//react icons import
import { BsGithub } from "react-icons/bs";
// import { FaSun } from "react-icons/fa";

//styles import
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <Link to={"/"}>
            <img
              src="/Images/brandLogo.png"
              alt="brand__logo"
              className={styles.brand__logo}
            />
          </Link>
          <Link to={"/"}>
            <h1 className={styles.brand__name}>ense</h1>
          </Link>
        </div>
        <div className={styles.nav__container}>
          <ul className={styles.nav__items}>
            <NavLink to={"/get-started"}>
              <li className={styles.nav__list}>Docs</li>
            </NavLink>
            <NavLink to={"/get-started"}>
              <li className={styles.nav__list}>Components</li>
            </NavLink>
            <li className={styles.nav__list}> | </li>
            <li className={styles.nav__list}>
              <div className={styles.icons__container}>
                {/* <FaSun className={styles.light__icon} /> */}
                <a href="https://github.com/niku-19/cssense-components.git">
                  <BsGithub className={styles.github__icon} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

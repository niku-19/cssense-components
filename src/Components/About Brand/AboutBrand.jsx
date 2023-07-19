import React from "react";

// react icons import
import { BiSearch } from "react-icons/bi";

//styles import
import styles from "./AboutBrand.module.css";
import { Link } from "react-router-dom";

const AboutBrand = () => {
  return (
    <div className={styles.brand__about__container}>
      <h1 className={styles.brand__heading}>
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <div className={styles.subHeading__container}>
        <h2 className={styles.brand__sub__heading}>
          A utility-first CSS framework packed with classes like{" "}
          <span className={styles.highlighText}> flex, pt-4, text-center</span>{" "}
          and <span className={styles.highlighText}>rotate-90</span> that can be
          composed to build any design, directly in your markup.
        </h2>
      </div>
      <div className={styles.get__started__btn__container}>
        <Link to={"/get-started"}>
          <button className={styles.getStarted__btn}>Get Started</button>
        </Link>
        <div className={styles.seacrch__input__box}>
          <BiSearch className={styles.search__icon} />
          <input
            type="text"
            placeholder="Search Docs"
            className={styles.quick__search__inp}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;

import React from "react";
//styles import
import styles from "./Card.module.css";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";
const Card = () => {
  return (
    <div className={styles.card__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Card;

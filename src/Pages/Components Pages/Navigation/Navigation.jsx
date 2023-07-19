import React from "react";
//styles import
import styles from "./Navigation.module.css";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";

const Navigation = () => {
  return (
    <div className={styles.navigation__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Navigation;

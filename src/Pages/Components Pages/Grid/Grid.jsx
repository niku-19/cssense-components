import React from "react";
//styles import
import styles from "./Grid.module.css";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";
const Grid = () => {
  return (
    <div className={styles.grid__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Grid;

import React from "react";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";

//styles import
import styles from "./Alert.module.css";

const Alert = () => {
  return (
    <div className={styles.alert__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Alert;

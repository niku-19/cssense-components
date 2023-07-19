import React from "react";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";

//styles import
import styles from "./Typography.module.css";

const Typography = () => {
  return (
    <div className={styles.typography__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Typography;

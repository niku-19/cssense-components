import React from "react";

//styles import
import styles from "./Badges.module.css";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";

const Badges = () => {
  return (
    <div className={styles.badges__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Badges;

import React from "react";

//styles import
import styles from "./Button.module.css";
import LeftSidebar from "../../../Components/LeftSidebar/LeftSidebar";
import Button from "../../../Pre-Built Components/Button/Button";

const ButtonPage = () => {
  return (
    <div className={styles.button__page__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>
        <Button />
      </div>
    </div>
  );
};

export default ButtonPage;

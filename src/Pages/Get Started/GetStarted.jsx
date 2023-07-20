import React from "react";

//styles import

import styles from "./GetStarted.module.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";

const GetStarted = (props) => {
  return (
    <div className={styles.getStarted__container}>
      <div className={styles.left__side__container}>
        <LeftSidebar />
      </div>
      <div className={styles.right__side__container}>{props.children}</div>
    </div>
  );
};

export default GetStarted;

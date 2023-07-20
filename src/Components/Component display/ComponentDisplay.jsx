import React from "react";

//styles import
import styles from "./ComponentDisplay.module.css";

const ComponentDisplay = (props) => {
  return <div className={styles.component__display}>{props.children}</div>;
};

export default ComponentDisplay;

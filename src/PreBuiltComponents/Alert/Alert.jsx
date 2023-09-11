import React from "react";
//style import
import styles from "./Alert.module.css";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import CodeShare from "../../Components/Code Share/CodeShare";

const Alert = () => {
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.alert__header}>Alert</h1>
      <h2 className={styles.alert__subHeader}>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several Alert variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <ComponentDisplay styles={style}>
        <div className="alert">This is Primary alert message from Cssense.</div>
        <div className="alert alert-success">
          This is Success alert message from Cssense.
        </div>
        <div className="alert alert-danger">
          This is Danger alert message from Cssense.
        </div>
        <div className="alert alert-warning">
          This is Warning alert message from Cssense.
        </div>
        <div className="alert alert-info">
          This is Info alert message from Cssense.
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above alerts, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="alert">This is Primary alert message from Cssense.</div>
        <div className="alert alert-success">This is Success alert message from Cssense.</div>
        <div className="alert alert-danger">This is Danger alert message from Cssense.</div>
        <div className="alert alert-warning">This is Warning alert message from Cssense.</div>
        <div className="alert alert-info">This is Info alert message from Cssense.</div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Outline Alert</h1>
      <p className={styles.about__title}>
        Outline alerts are created by using alert class, followed by
        outline-variant.
      </p>
      <ComponentDisplay styles={style}>
        <div className="alert alert-outline-success">
          This is Success outline alert message from Cssense.
        </div>
        <div className="alert alert-outline-danger">
          This is Danger outline alert message from Cssense.
        </div>
        <div className="alert alert-outline-warning">
          This is Warning outline alert message from Cssense.
        </div>
        <div className="alert alert-outline-info">
          This is Info outline alert message from Cssense.
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above alerts, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="alert alert-outline-success">This is Success outline alert message from Cssense.</div>
        <div className="alert alert-outline-danger">This is Danger outline alert message from Cssense.</div>
        <div className="alert alert-outline-warning">This is Warning outline alert message from Cssense.</div>
        <div className="alert alert-outline-info">This is Info alert outline message from Cssense.</div>
        `}
      />
      {/* ---------------> */}
    </div>
  );
};

export default Alert;

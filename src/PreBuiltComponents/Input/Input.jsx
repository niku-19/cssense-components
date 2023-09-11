import React from "react";
import CodeShare from "../../Components/Code Share/CodeShare";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import styles from "./Input.module.css";
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Input = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.input__header}>Input</h1>
      <h2 className={styles.input__subHeader}>
        The Input component is a component that is used to get user input in a
        text field.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several input variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <ComponentDisplay styles={style}>
        <div className="input-box">
          <label>Enter Your Name</label>
          <input
            placeholder="Please Enter Text"
            type="text"
            className="input"
          />
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above Inputs, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="input-box">
          <label>Enter Your Name</label>
          <input placeholder="Please Enter Text" type="text" className="input" />
        </div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Error Input</h1>
      <p className={styles.about__title}>
        This input component is used to validate the user input.
      </p>
      <ComponentDisplay styles={style}>
        <div className="input-box err">
          <label>Enter Your Name</label>
          <input
            placeholder="Please Enter Text"
            type="text"
            className="input"
          />
          <div className="err">Invalid Name !</div>
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above Inputs, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="input-box err">
        <label>Enter Your Name</label>
        <input placeholder="Please Enter Text" type="text" className="input"/>
        <div className="err">Invalid Name !</div>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  );
};

export default Input;

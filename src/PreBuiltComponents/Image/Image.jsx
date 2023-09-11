import React from "react";
import CodeShare from "../../Components/Code Share/CodeShare";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import styles from "./Image.module.css";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Image = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.image__header}>Image</h1>
      <h2 className={styles.image__subHeader}>
        The Image component is used to display images.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several image variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <ComponentDisplay styles={style}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="sm-img"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="md-img"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="lg-img"
        />
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above Image, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <img src="url" alt="Image" className="sm-img"/>
        <img src="url" alt="Image" className="md-img"/>
        <img src="url" alt="Image" className="lg-img"/>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Rounded Images</h1>
      <p className={styles.about__title}>
        The className = "round-img" is having default value of border-radius of
        50% explicitly.
      </p>
      <ComponentDisplay styles={style}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="sm-img round-img"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="md-img round-img"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
          alt=""
          className="lg-img round-img"
        />
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above Image, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <img src="url" alt="Image" className="sm-img round-img" />
        <img src="url" alt="Image" className="md-img round-img" />
        <img src="url" alt="Image" className="lg-img round-img" />
        `}
      />
      {/* ---------------> */}
    </div>
  );
};

export default Image;

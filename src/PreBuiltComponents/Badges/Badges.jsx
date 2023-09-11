import React from "react";
import CodeShare from "../../Components/Code Share/CodeShare";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import styles from "./Badges.module.css";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Badges = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.badges__header}>Badge</h1>
      <h2 className={styles.badges__subHeader}>
        Badges are used to highlight an item's status for quick recognition.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several badges variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <ComponentDisplay styles={style}>
        <div className="badges">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
          <div className="online"></div>
        </div>
        <div className="badges">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
          <div className="offline"></div>
        </div>
        <div className="badges">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
          <div className="dnd"></div>
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above badgess, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="badges">
          <img src="url" className="avatar" alt="Image" />
          <div className="online"></div>
        </div>
        <div className="badges">
          <img src="url" className="avatar" alt="Image" />
          <div className="offline"></div>
        </div>
        <div className="badges">
          <img src="url" className="avatar" alt="Image" />
          <div className="dnd"></div>
        </div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Icon badges</h1>
      <p className={styles.about__title}>
        Icon Badge is used to show the quantity on the top of the svg/image.
      </p>
      <ComponentDisplay styles={style}>
        <div className="badges">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
          <div className="number">1</div>
        </div>
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above badgess, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        <div className="badges">
          <img src="url" className="avatar" alt="Image" />
          <div className="number"></div>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  );
};

export default Badges;

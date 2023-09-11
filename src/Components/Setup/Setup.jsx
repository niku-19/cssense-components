import React from "react";
import CodeShare from "../Code Share/CodeShare";
import styles from "./Setup.module.css";
import componentsData from "../../Data/ComponentsData";
import { NavLink } from "react-router-dom";
const Setup = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.setup__header}>Get Started</h1>
      <h2 className={styles.setup__subHeader}>
        Componently is a collection of web components that can help you create
        websites faster and better. Componently helps you to quickly build your
        Dream Project, by focusing much on Functionality, because we take care
        of your Designs.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>To get started:</h1>
      <p className={styles.about__title}>
        You can add Componently to your Website/Project via the free unpkg CDN.
        Just add the following Link element into your page's head, before your
        project's stylesheets.
      </p>
      <CodeShare
        code={`
        <link rel="stylesheet" href="https://cssense.vercel.app/Styles/Main.css" />
        `}
      />
      {/* ---------------> */}
      <h1 className={styles.setup__header}>Components we have</h1>
      <h2 className={styles.setup__subHeader}>
        The all of our components we have listed below:
      </h2>
      <div className="grid-auto-fit">
        {componentsData.map((EachData) => (
          <NavLink to={`/docs${EachData.path}`} key={EachData.id}>
            <button className={styles.btn__components}>{EachData.name}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Setup;

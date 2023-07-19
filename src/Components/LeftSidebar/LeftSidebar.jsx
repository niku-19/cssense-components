import React from "react";

//react icons import
import { BiSearch } from "react-icons/bi";

//import styles
import styles from "./LeftSidebar.module.css";
import { NavLink } from "react-router-dom";
import componentsData from "../../Data/ComponentsData";

const LeftSidebar = () => {
  return (
    <div className={styles.leftSide__container}>
      <div className={styles.search__inp}>
        <BiSearch className={styles.search__icon} />
        <input
          type="text"
          placeholder="Quick Search"
          className={styles.search__input__feild}
        />
      </div>
      <div className={styles.scrooll__container}>
        <div className={styles.important__link}>
          <h1 className={styles.important__link__heading}>Geeting Started</h1>
          <NavLink
            to="/get-started"
            className={({ isActive }) =>
              isActive
                ? styles.get__started__btn__active
                : styles.get__started__btn
            }
          >
            Get Started
          </NavLink>
        </div>
        <h1 className={styles.pre__build__components__heading}>Components</h1>
        <div className={styles.pre__build__components}>
          {componentsData?.map((eachComponent) => {
            return (
              <NavLink
                to={`/docs${eachComponent.path}`}
                key={eachComponent.id}
                className={({ isActive }) =>
                  isActive
                    ? styles.get__started__btn__active
                    : styles.get__started__btn
                }
              >
                {eachComponent.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchModal.module.css";
import componentsData from "../../Data/ComponentsData";
import { NavLink } from "react-router-dom";
const SearchModal = ({ handleSearchModalClose }) => {
  const [showSearchComponent, setShowSearchComponent] = useState("");
  return (
    <>
      <div className="modal__overlay" onClick={handleSearchModalClose}></div>
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">Quick Search</h2>
          <span className="modal__close" onClick={handleSearchModalClose}>
            X
          </span>
        </div>
        <div className="modal__body">
          <div className={styles.search__box}>
            <FaSearch className={styles.search__icon} />
            <input
              type="text"
              name="search"
              id="seach"
              placeholder="Quick Search"
              onChange={(e) => setShowSearchComponent(e.target.value.trim())}
              className={styles.search__input__feild}
            />
          </div>
          {showSearchComponent.length > 0 && (
            <div className="grid-auto-fit">
              {componentsData
                .filter((EachData) =>
                  EachData.name
                    .toLowerCase()
                    .includes(showSearchComponent.trim().toLowerCase())
                )
                .map((EachData) => (
                  <NavLink to={`/docs${EachData.path}`} key={EachData.id}>
                    <button
                      onClick={handleSearchModalClose}
                      className={styles.btn__components}
                    >
                      {EachData.name}
                    </button>
                  </NavLink>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;

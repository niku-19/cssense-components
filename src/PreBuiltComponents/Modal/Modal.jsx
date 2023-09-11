import React, { useState } from "react";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import CodeShare from "../../Components/Code Share/CodeShare";
import styles from "./Modal.module.css";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.modal__header}>Modal</h1>
      <h2 className={styles.modal__subHeader}>
        The modal component is a component that can be used to display
        information to the user. It can be used to display information that is
        not important to the user, but is important to the application.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several modal variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <ComponentDisplay
        styles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <button className="btn btn-info" onClick={openModal}>
          Open Modal
        </button>
        {showModal && <div className="modal__overlay"></div>}
        {showModal && (
          <div className="modal__container">
            <div className="modal__header">
              <h2 className="modal__title">Modal Title</h2>
              <span className="modal__close" onClick={closeModal}>
                X
              </span>
            </div>
            <div className="modal__body">
              <p className="modal__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                iure, eum minus porro, eius autem quis voluptatibus voluptas
                consectetur perspiciatis, dignissimos sed id magnam error
                quibusdam corrupti odit voluptatem ducimus similique. Tenetur
                delectus placeat, amet quas consectetur architecto ratione,
                porro eius numquam dolor ipsam, temporibus sapiente perspiciatis
                cumque. Velit?
              </p>
            </div>
          </div>
        )}
      </ComponentDisplay>
      <p className={styles.copy__code__des}>
        To achieve the above modals, you need to follow the following code:
      </p>
      <CodeShare
        code={`
        //state to control the modal
        const [showModal, setShowModal] = useState(false);
        const openModal = () => {
          setShowModal(true);
        };

        const closeModal = () => {
          setShowModal(false);
        };
        //state to control the modal
        <button className="btn btn-info" onClick={openModal}>
          Open Modal
        </button>
        {showModal && <div className="modal__overlay"></div>}
        {showModal && (
          <div className="modal__container">
            <div className="modal__header">
              <h2 className="modal__title">Modal Title</h2>
              <span className="modal__close" onClick={closeModal}> X </span>
            </div>
            <div className="modal__body">
              <p className="modal__text"> content...</p>
            </div>
          </div>
        `}
      />
      {/* ---------------> */}
    </div>
  );
};

export default Modal;

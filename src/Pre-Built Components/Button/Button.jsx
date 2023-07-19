import React from "react";
//styles import
import "./Button.css";
import CodeShare from "../../Components/Code Share/CodeShare";
const Button = () => {
  return (
    <div className="container">
      <h1 className="button__header">Button</h1>
      <h2 className="button__subHeader">
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </h2>
      <h1>Usages</h1>
      <div className="button__showCase__container">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-danger">Danger</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
      </div>
      <CodeShare
        highlight="1,3,5,7,9,11,13,15,17,19"
        code={`
                < -- For Default Button -->
        <button className="btn">Default</button>
                < -- For Primary Button --> 
        <button className="btn btn-primary">Primary</button>
                < -- For Secondary Button -->
        <button className="btn btn-secondary">Secondary</button>
                < -- For Success Button -->
        <button className="btn btn-success">Success</button>
                < -- For Warning Button --> 
        <button className="btn btn-warning">Warning</button>
                < -- For Danger Button -->
        <button className="btn btn-danger">Danger</button>
                < -- For Info Button -->      
        <button className="btn btn-info">Info</button>
                < -- For Light Button -->
        <button className="btn btn-light">Light</button>
                < -- For Dark Button -->
        <button className="btn btn-dark">Dark</button>
        `}
      />
    </div>
  );
};

export default Button;

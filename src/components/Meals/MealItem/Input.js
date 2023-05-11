import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <React.Fragment>
      <div className={styles.input}>
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input type={props.type} value={props.value} id={props.id} readOnly />
      </div>
    </React.Fragment>
  );
}

export default Input;

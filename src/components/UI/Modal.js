import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default function Modal(props) {
  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

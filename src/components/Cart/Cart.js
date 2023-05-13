import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart() {
  return (
    <Modal>
      <div className={styles["cart-items"]}>
        <span>Sushi</span>
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton({ handleCart }) {
  return (
    <button
      onClick={() => {
        handleCart(true);
      }}
      className={styles.button}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
}

export default HeaderCartButton;

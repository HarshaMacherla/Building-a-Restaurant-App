import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header({ handleCart }) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton handleCart={handleCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of Delicious Food" />
      </div>
    </React.Fragment>
  );
}

export default Header;

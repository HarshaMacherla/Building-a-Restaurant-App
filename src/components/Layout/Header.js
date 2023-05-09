import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import RestaurantSummary from "../Meals/RestaurantSummary";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of Delicious Food" />
        <RestaurantSummary />
      </div>
    </React.Fragment>
  );
}

export default Header;

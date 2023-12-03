import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import MENU from "./Menu";
import { useState } from "react";

const AvailableMeals = () => {
  const [selectedMenu, setSelectedMenu] = useState("starters");

  const { starters, naan, biryani } = MENU;

  const availableStarters = starters.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const availableNaans = naan.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const availableBiryanis = biryani.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <header className={classes["menu-header"]}>
          <nav className={classes["menu-nav"]}>
            <ul className={classes["menu-list-items"]}>
              <li
                className={`${classes["menu-item"]} ${
                  selectedMenu === "starters" && classes.active
                }`}
                onClick={() => setSelectedMenu("starters")}
              >
                Starters
              </li>
              <li
                className={`${classes["menu-item"]} ${
                  selectedMenu === "naans" && classes.active
                }`}
                onClick={() => setSelectedMenu("naans")}
              >
                Naans
              </li>
              <li
                className={`${classes["menu-item"]} ${
                  selectedMenu === "biryani" && classes.active
                }`}
                onClick={() => setSelectedMenu("biryani")}
              >
                Biryani
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {selectedMenu === "starters" && <ul>{availableStarters}</ul>}
          {selectedMenu === "naans" && <ul>{availableNaans}</ul>}
          {selectedMenu === "biryani" && <ul>{availableBiryanis}</ul>}
        </main>
      </Card>
    </section>
  );
};

export default AvailableMeals;

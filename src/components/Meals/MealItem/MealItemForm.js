import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "./Input";

function MealItemForm() {
  return (
    <form className={styles.form}>
      <div>
        <Input
          label="Amount"
          htmlFor="amount"
          type="number"
          id="amount"
          value={1}
        />
      </div>
      <div>
        <button className={styles.button}>+Add</button>
      </div>
    </form>
  );
}

export default MealItemForm;

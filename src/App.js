import React from "react";
import Header from "./components/Layout/Header";
import RestaurantSummary from "./components/Meals/RestaurantSummary";
import DummyMeals from "./components/Meals/DummyMeals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <RestaurantSummary />
        <DummyMeals />
      </main>
    </React.Fragment>
  );
}

export default App;

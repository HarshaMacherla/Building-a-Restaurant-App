import React from "react";
import Header from "./components/Layout/Header";
import RestaurantSummary from "./components/Meals/RestaurantSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <RestaurantSummary />
      </main>
    </React.Fragment>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const handleCart = (bool) => {
    setOpenCart(bool);
  };

  return (
    <React.Fragment>
      <Cart openCart={openCart} handleCart={handleCart} />
      <Header handleCart={handleCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;

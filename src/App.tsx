import { useState } from "react";
import { CartContext } from "./contexts/cart-context";
import Routes from "./routes/routes";

function App() {
  const cart: any = [];

  return (
    <CartContext.Provider value={{ cart }}>
      <Routes />
    </CartContext.Provider>
  );
}

export default App;

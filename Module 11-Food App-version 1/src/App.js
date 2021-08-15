import { useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleCartShown = () => {
    setCartIsShown(true);
  };

  const handleCartRemove = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={handleCartRemove} />}
      <Header showCart={handleCartShown} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;

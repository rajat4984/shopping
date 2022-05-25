import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import shoes from "./components/shoes.json";
import { useState } from "react";

function App() {
  const [cartCardList, setCartCardList] = useState(() => new Set());
  const [checkOutPrice, setCheckOutPrice] = useState(0);

  const increseCartCardList = (cardId) => {
    const shoe = shoes[cardId - 1];
    setCartCardList(cartCardList.add(shoe));
    setCheckOutPrice((prevPrice) => prevPrice + shoe.price);
  };

  const decreaseCartCardList = (cardId) => {
    console.log(cartCardList)
    const shoe = shoes[cardId - 1];
    setCartCardList(cartCardList.delete(shoe));
    setCheckOutPrice((prevPrice) => prevPrice - shoe.price);
  };

  return (
    <div className="App">
      <Navbar brand="Jordan" />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/shop"
          element={
            <Shop
              shoes={shoes}
              increseCartCardList={increseCartCardList}
              decreaseCartCardList={decreaseCartCardList}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart cartCardList={cartCardList} checkOutPrice={checkOutPrice} />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

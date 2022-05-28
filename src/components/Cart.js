import React from "react";
import CartCard from "./CartCard";
import NoShoes from "./NoShoes";

function Cart({ cartCardList, checkOutPrice, removeShoeCart }) {
  return (
    <div className="cart-container">
      <div className="cart-card-container">
        {cartCardList.map((cartCard) => {
          return (
            <CartCard
              key={cartCard.id}
              {...cartCard}
              removeShoeCart={removeShoeCart}
            />
          );
        })}
      </div>
      {cartCardList.length === 0 ? (
        <NoShoes />
      ) : (
        <div className="checkout-container">
          <div className="checkout-amount">Total: ${checkOutPrice}</div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

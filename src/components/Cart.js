import React from "react";
import CartCard from "./CartCard";

function Cart({ cartCardList, checkOutPrice }) {
  const cartCardListArray = Array.from(cartCardList);
  return (
    <div className="cart-container">
      {cartCardListArray.map((cartCard) => {
        return <CartCard key={cartCard.id} {...cartCard} />;
      })}
      {cartCardListArray.length !== 0 && (
        <div className="checkout-container">
          <div className="checkout-amount">Total: ${checkOutPrice}</div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

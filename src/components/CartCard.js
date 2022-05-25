import React from "react";
import { FiTrash } from "react-icons/fi";

function CartCard({ price, img, shoeName, qty }) {
  return (
    <div className="cart-card">
      <img src={img} className="cart-shoe-img" alt={shoeName}></img>
      <p className="cart-shoe-name">{shoeName}</p>
      <p>{qty}</p>
      <p>${price}</p>
      <FiTrash className="cart-delete" />
    </div>
  );
}

export default CartCard;

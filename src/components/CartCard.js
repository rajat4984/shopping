import React from "react";
import {FaRegTrashAlt} from 'react-icons/fa'

function CartCard({ price, img, shoeName, qty,removeShoeCart,id }) {
  return (
    <div className="cart-card">
      <img src={img} className="cart-shoe-img" alt={shoeName}></img>
      <p className="cart-shoe-name">{shoeName}</p>
      <p>{qty}</p>
      <p>${price}</p>
      <FaRegTrashAlt className="cart-delete" onClick={()=>removeShoeCart(id,price,qty)}/>
    </div>
  );
}

export default CartCard;

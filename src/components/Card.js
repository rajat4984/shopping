import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import shoes from "./shoes.json";

function Card({
  id,
  price,
  img,
  shoeName,
  qty,
  increseCartCardList,
  decreaseCartCardList,
}) {
  const [cardQty, setQty] = useState(qty);

  const increaseQty = () => {
    increseCartCardList(id);
    shoes[id - 1].qty = cardQty + 1;
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    decreaseCartCardList(id,cardQty);
    if (cardQty > 0) {
      shoes[id - 1].qty = cardQty - 1;
    }

    cardQty > 0 && setQty((prevQty) => prevQty - 1);
  };

  return (
    <div className="card">
      <img src={img} className="card-shoe-img"></img>
      <p className="shoe-name">{shoeName}</p>
      <div className="info-container">
        <div className="btn-container">
          <AiOutlineMinus className="less-btn" onClick={decreaseQty} />
          <p className="qty">{cardQty}</p>
          <AiOutlinePlus className="add-btn" onClick={increaseQty} />
        </div>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
}

export default Card;

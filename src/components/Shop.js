import React from "react";
import Card from "./Card";

function Shop({ shoes, increseCartCardList,decreaseCartCardList }) {
  return (
    <div className="card-container">
      {shoes.map((shoe) => {
        return (
          <Card
            key={shoe.id}
            {...shoe}
            increseCartCardList={increseCartCardList}
            decreaseCartCardList={decreaseCartCardList}
          />
        );
      })}
    </div>
  );
}

export default Shop;

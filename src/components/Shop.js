import React from "react";
import Card from "./Card";

function Shop({ shoes, increseCartCardList, decreaseCartCardList }) {
  return (
    <div>
      <div className="shoe-card-container">
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
    </div>
  );
}

export default Shop;

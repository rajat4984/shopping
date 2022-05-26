import React from "react";
import { BsShop } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({ brand }) {
  return (
    <nav>
      <div className="navbar">
        <div>
          <Link to="/" className="brand">
            {brand}
          </Link>
        </div>
        <div className="preview">
          <Link to="shop" className="preview-link">
            <BsShop />
          </Link>
          <Link to="cart" className="preview-link">
            <BsCart2 />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ViewCart.css";

export default function () {
  const [quantity, setQuantity] = useState(0);

  // Both the "incrementQuantity" and "decrementQuantity" functions uses state and adds or subtracts the quantity depending on which if the plus or minus button is clicked
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 0) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="viewcart-goback-btn">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
      <div className="viewcart-container">
        <div className="item-container">
          <span className="viewcart_item">Item</span>
          <div className="button_container">
            <button className="viewcart_increment" onClick={incrementQuantity}>
              +
            </button>
            <span className="viewcart_quantity">{quantity}</span>
            <button className="viewcart_decrement" onClick={decrementQuantity}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import './ViewCart.css'

export default function () {
  return (
    <>
      <div className="viewcart-container">
        <div className="item-container">
          <span className="viewcart_item">Item</span>
          <div className="button_container">
            <button className="viewcart_increment">+</button>
            <span className="viewcart_quantity">1</span>
            <button className="viewcart_decrement">-</button>
          </div>
        </div>
      </div>
    </>
  );
}

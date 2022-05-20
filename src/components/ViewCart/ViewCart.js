import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./ViewCart.css";

export default function () {
  const {
    isEmpty,
    emptyCart,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <div className="viewcart-goback-btn">
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
        <div className="empty-container">
          <h2 className="empty_title">Your cart is empty...</h2>
        </div>
      </>
    );

  return (
    <>
      <div className="viewcart-goback-btn">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
      <div className="viewcart-container">
        <h1>Items ({totalItems})</h1>

        {/* Maps over the items object, which was created by the "useCart" API by adding the plant object with the "useCart" when I looped over them to create the cards in the "ProductPageCard" page */}
        {items.map((item) => (
          <div className="item-container" key={item.id}>
            <h4 className="viewcart_item">{item.name}</h4>
            <span
              className={`img_container ${
                item.id === 1 ? "jade_plant" : "aloe_vera"
              }`}
            ></span>
            <div className="button_container">
              <button
                className="viewcart_increment"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <span className="viewcart_quantity">{item.quantity}</span>
              <button
                className="viewcart_decrement"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <span className="cart-total">Total: ${cartTotal.toFixed(2)}</span>
        <button onClick={() => emptyCart()}>Remove All Items</button>
      </div>
    </>
  );
}

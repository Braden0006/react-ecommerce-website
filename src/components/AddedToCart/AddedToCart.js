import React from "react";
import ReactDOM from "react-dom";
import "./AddedToCart.css";

export default function AddedToCart({ open, onClose, children }) {

  // If "open" is false, than the modal is not shown, if it's true then it is shown
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="addedtocart-background">
      <div className="addedtocart-container">
        <span className="cart_title">Added to Cart!</span>
        <div className="button-container">
          <button className="cart_button">View Cart</button>
          <button className="cart_button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

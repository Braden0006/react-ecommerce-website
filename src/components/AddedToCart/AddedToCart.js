import React from "react";
import ReactDOM from "react-dom";
import "./AddedToCart.css";
import { Link } from "react-router-dom";

export default function AddedToCart({ open, onClose }) {
  
  // If "open" is false, than the modal is not shown, if it's true then it is shown
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="addedtocart-background">
      <div className="addedtocart-container">
        <span className="cart_title">Added to Cart!</span>
        <div className="button-container">
          <Link to="/viewcart">
            <button className="cart_button" to="/viewcart">
              View Cart
            </button>
          </Link>
          <button className="cart_button" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

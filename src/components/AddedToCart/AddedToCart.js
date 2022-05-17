import React from "react";
import "./AddedToCart.css";

export default function AddedToCart({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div class="addedtocart-background">
      <div className="addedtocart-container">
        <span>Added to Cart!</span>
        <button>View Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

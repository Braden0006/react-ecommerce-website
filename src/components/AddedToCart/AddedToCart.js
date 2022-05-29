import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./AddedToCart.css";

export default function AddedToCart({ open, onClose }) {
  // If "open" is false, than the modal is not shown, if it's true then it is shown
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="addedtocart-background">
      <div className="addedtocart-container">
        <span className="cart_title">Added to Cart!</span>
        <div className="button-container">
          <Link to="/viewcart">
            <motion.button
              className="cart_button"
              to="/viewcart"
              whileHover={{ scale: 1.1 }}
            >
              View Cart
            </motion.button>
          </Link>
          <motion.button
            className="cart_button"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
          >
            Continue Shopping
          </motion.button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

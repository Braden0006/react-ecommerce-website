import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import "./ViewCart.css";

export default function ViewCart() {
  // the variables from the "useCart" api to add functionality for all the items and the cart
  const {
    isEmpty,
    emptyCart,
    items,
    updateItemQuantity,
    totalItems,
    cartTotal,
  } = useCart();

  // if the cart is empty than this will be display...
  if (isEmpty)
    return (
      <>
        <div className="viewcart-goback-btn">
          <Link to="/">
            <motion.button
              className="viewcart-back"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Go Back
            </motion.button>
          </Link>
        </div>
        <div className="empty-container">
          <h2 className="empty_title">Your cart is empty...</h2>
        </div>
      </>
    );

  return (
    <>
      <div className="viewcart-back-btn">
        <Link to="/">
          <motion.button
            className="viewcart-back"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Go Back
          </motion.button>
        </Link>
      </div>
      <div className="viewcart-container">
        <h1>Items ({totalItems})</h1>

        {/* Maps over the items object, which was created by the "useCart" API by adding the plant object with the "useCart" when I looped over them to create the cards in the "ProductPageCard" page */}
        <div className="item">
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
        </div>
        <span className="cart-total">Total: ${cartTotal.toFixed(2)}</span>
        <button className="remove-item_btn" onClick={() => emptyCart()}>
          Remove All Items
        </button>
      </div>
    </>
  );
}

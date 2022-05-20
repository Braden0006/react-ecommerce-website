import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useCart } from "react-use-cart";
import AddedToCart from "../AddedToCart/AddedToCart";
import { Routes, Route } from "react-router-dom";
import ViewCart from "../ViewCart/ViewCart";
import "./ProductPageCard.css";

export default function ProductPageCard() {
  const { addItem, setAddItem } = useContext(CartContext);

  // The state for rather or not the "AddedToCart" modal pops up when "Add to cart" is clicked
  const [isOpen, setIsOpen] = useState(false);

  // When the modal is shown, the page behind it isn't scrollable, but when the modal is not shown it is scrollable
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  // const { addPlant } = useCart()

  // Array of objectc with the plants to map over and make the cards with
  const plants = [
    {
      id: 1,
      name: "Jade Plant",
      description: `The Jade Plant was originated in South Africa, but has been
    cultivated in America and Europe as a house plant. The grow good in
    containers and like warm, dry climated often found in most homes`,
      price: 16.99,
    },
    {
      id: 2,
      name: "Aloe Vera",
      description: `Aloe Vera is one of the most popular succulent plants. This plant
      originated in the Arabian peninsula. You can use the compounds in
      the leaf to ease scrapes and burns`,
      price: 19.99,
    },
  ];

  return (
    <>
      <AddedToCart open={isOpen} onClose={() => setIsOpen(false)} />

      {plants.map((plant) => (
        <div className="productcard-container" key={plant.id}>
          <div className="product_title_container">
            <span>{plant.name}</span>
          </div>
          <div
            className={`productcard_img_container ${
              plant.name === "Jade Plant" ? "jade_plant" : "aloe_vera"
            }`}
          ></div>
          <div className="productcard_info_container">
            <p className="productcard_info">{plant.description}</p>
          </div>
          <button
            className="productcard_button"
            // When the button is clicked, it increments the number next to then cart icon
            onClick={() => {
              setAddItem(addItem + 1);
              setIsOpen(true);
              // addPlant(plant)
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
}

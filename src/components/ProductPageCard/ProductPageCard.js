import React, { useState, useContext } from "react";

import AddedToCart from "../AddedToCart/AddedToCart";
import { CartContext } from "../../context/CartContext";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";

import "./ProductPageCard.css";

export default function ProductPageCard() {
  const { addPlant, setAddPlant } = useContext(CartContext);

  // The state for rather or not the "AddedToCart" modal pops up when "Add to cart" is clicked
  const [isOpen, setIsOpen] = useState(false);

  // When the modal is shown, the page behind it isn't scrollable, but when the modal is not shown it is scrollable
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  // This variable function is set to the onClick of the "Add Cart" button so it adds the object of the plant to the "useCart" api
  const { addItem } = useCart();

  // Array of objects with the plants to map over and make the cards with
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

      <div className="productcard__container">
        {plants.map((plant) => (
          <div className="productcard__container-container" key={plant.id}>
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
            <motion.button
              className="productcard_button"
              // When the button is clicked, it increments the number next to then cart icon
              onClick={() => {
                setAddPlant(addPlant + 1);
                setIsOpen(true);
                addItem(plant);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Add to cart
            </motion.button>
          </div>
        ))}
      </div>
    </>
  );
}

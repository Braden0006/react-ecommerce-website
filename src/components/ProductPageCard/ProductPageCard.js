import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AddedToCart from "../AddedToCart/AddedToCart";
import "./ProductPageCard.css";

export default function ProductPageCard() {
  const { addItem, setAddItem } = useContext(CartContext);

  // The state for rather or not the "AddedToCart" modal pops up when "Add to cart" is clicked
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddedToCart open={isOpen} onClose={() => setIsOpen(false)} />
      <div className="productcard-container">
        <div className="product_title_container">
          <span>Jade Plant</span>
        </div>
        <div className="productcard_img_container jade_plant"></div>
        <div className="productcard_info_container">
          <p className="productcard_info">
            The Jade Plant was originated in South Africa, but has been
            cultivated in America and Europe as a house plant. The grow good in
            containers and like warm, dry climated often found in most homes{" "}
          </p>
        </div>
        <button className="productcard_button">Add to cart</button>
      </div>

      <div className="productcard-container">
        <div className="product_title_container">
          <span>Aloe Vera</span>
        </div>
        <div className="productcard_img_container aloe_vera"></div>
        <div className="productcard_info_container">
          <p className="productcard_info">
            Aloe Vera is one of the most popular succulent plants. This plant
            originated in the Arabian peninsula. You can use the compounds in
            the leaf to ease scrapes and burns
          </p>
        </div>
        <button className="productcard_button">Add to cart</button>
      </div>
    </>
  );
}

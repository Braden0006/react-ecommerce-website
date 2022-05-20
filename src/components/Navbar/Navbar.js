import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Navbar() {
  // This allows us to get the state variable in the App component using the context API

  const [showMenu, setShowMenu] = useState(false);

  // Function to determine rather or not the state is true or false to apply the 'hide' class on the hamburger menu
  const open = () => {
    return showMenu ? null : "hide";
  };

  // Sets the "showMenu" value to toggle between true and false
  const menu = () => {
    setShowMenu(!showMenu);
  };

  // Checks to see if theres an item added to the cart and rather or not to display the number, so if there's nothing added it doesn't display anything next to the cart icon
  const isNumberShown = () => {
    return totalUniqueItems === 0 ? "hidden" : null;
  };

  // put the "totalUniqueItems" in a variable with the "useCart" API to display how many different items are in the cart next to the cart icon
  const { totalUniqueItems } = useCart();

  return (
    <>
      <div className="navbar-container">
        <div className="hamburger_container">
          <GiHamburgerMenu
            // if the "showMenu" state is true than the hidden class is applied
            className={showMenu ? "hidden" : null}
            // Toggles the "showMenu" state to true or false when the hamburger icon is clicked
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="navbarcart_container">
          <Link className="carticon_link" to="/viewcart/*">
            <AiOutlineShoppingCart />
          </Link>
          <span className={`number ${isNumberShown()}`}>
            {totalUniqueItems}
          </span>
        </div>
      </div>
      <HamburgerMenu open={open} menu={menu} />
    </>
  );
}

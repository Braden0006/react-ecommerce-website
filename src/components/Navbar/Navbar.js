import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { CartContext } from '../../context/CartContext'

export default function Navbar() {

  // This allows us to get the state variable in the App component using the context API
  const { addItem } = useContext(CartContext)

  const [showMenu, setShowMenu] = useState(false);

  // Function to determine rather or not the state is true or false to apply the 'hide' class on the hamburger menu
  const open = () => {
    return showMenu ? null : 'hide'
  }

  // Sets the "showMenu" value to toggle between true and false
  const menu = () => {
    setShowMenu(!showMenu)
  }

  // Checks to see if theres an item added to the cart and rather or not to display the number, so if there's nothing added it doesn't display anything next to the cart icon
  const isNumberShown = () => {
    return addItem === 0 ? 'hidden' : null
  }

  return (
    <>
      <div className="navbar-container">
        <div className="hamburger_container">
          <GiHamburgerMenu
            className={showMenu ? "hidden" : null}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <div className="navbarcart_container">
          <AiOutlineShoppingCart />
          <span className={`number ${isNumberShown()}`}>{addItem}</span>
        </div>
      </div>
      <HamburgerMenu open={open} menu={menu} />
    </>
  );
}

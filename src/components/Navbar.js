import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const open = () => {
    return showMenu ? null : 'hide'
  }

  const menu = () => {
    setShowMenu(!showMenu)
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
          <span className="number">1</span>
        </div>
      </div>
      <HamburgerMenu open={open} menu={menu} />
    </>
  );
}

import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import './HamburgerMenu.css'

export default function ({open, menu}) {
  return (
    <div className={`navbarlink-container ${open()}`}>
      <AiOutlineClose
        className="x-icon"
        onClick={menu}
      />
      <ul className="navbarlink_list">
        <li className="navbarlink_link">
          {/* Used to "Link" tag with the HashLink to it routes to these certain parts of the page */}
          <Link to="#about" smooth onClick={menu}>About</Link>
        </li>
        <li className="navbarlink_link">
          <Link to="#shop" smooth onClick={menu}>Shop</Link>
        </li>
        <li className="navbarlink_link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

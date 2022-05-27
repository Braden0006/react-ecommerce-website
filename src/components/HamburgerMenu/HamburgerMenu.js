import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "./HamburgerMenu.css";

export default function HamburgerMenu({ menu, menuShown }) {
  return (
    <motion.div
      className={`navbarlink-container`}
      initial={{ x: -1000 }}
      animate={{ x: menuShown ? 0 : -1000 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.01 }}
    >
      <div>
        <AiOutlineClose className="x-icon" onClick={menu} />
      </div>
      <ul className="navbarlink_list">
        <li className="navbarlink_link">
          {/* Used to "Link" tag with the HashLink to it routes to these certain parts of the page */}
          <Link to="#about" smooth onClick={menu}>
            About
          </Link>
        </li>
        <li className="navbarlink_link">
          <Link to="#shop" smooth onClick={menu}>
            Shop
          </Link>
        </li>
        <li className="navbarlink_link">
          <Link to='#shop' smooth onClick={menu}>
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}

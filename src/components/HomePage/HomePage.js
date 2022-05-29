import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage_title_button">
          <div className="homepage-title-container">
            <span className="homepage_title">
              Succulents from around the globe
            </span>
            <span className="homepage_title">shipped right to your door</span>
          </div>
          <Link to="#shop" smooth>
            <motion.button
              className="homepage_button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Shop Now
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}

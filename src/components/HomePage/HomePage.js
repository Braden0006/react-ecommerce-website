import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage_title_button">
          <div className="homepage-title-container">
            <span className="homepage_title">Succulents from around the globe</span>
            <span className="homepage_title">shipped right to your door</span>
          </div>
          <Link to='#shop' smooth><button className="homepage_button">Shop Now</button></Link>
        </div>
      </div>
    </>
  );
}

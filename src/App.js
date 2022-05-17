import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Information from "./components/Information/Information";
import ProductPage from "./components/ProductPage/ProductPage";
import { CartContext } from "./context/CartContext";

function App() {
  const [addItem, setAddItem] = useState(0)

  return (
    <>
      {/* Wrapped the whole app component in the 'Router' tag so that the hamburger menu links can route to certain parts of the page */}
      <Router>
        <div className="app-container">
          <CartContext.Provider value={{addItem, setAddItem}} >
            <div className="homepage">
              <Navbar />
              <HomePage />
            </div>
            <Information />
            <ProductPage />
          </CartContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Information from "./components/Information/Information";
import ProductPage from "./components/ProductPage/ProductPage";
import { Routes, Route } from "react-router-dom";
import ViewCart from "./components/ViewCart/ViewCart";
import { CartContext } from "./context/CartContext";
import { CartProvider } from "react-use-cart";

function App() {
  const [addItem, setAddItem] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <CartContext.Provider value={{ addItem, setAddItem }}>
                <div className="homepage">
                  <Navbar />
                  <HomePage />
                </div>
                <Information />
                <CartProvider>
                  <ProductPage />
                </CartProvider>
              </CartContext.Provider>
            </div>
          }
        />
        <Route path="/viewcart/*" element={<ViewCart />} />
      </Routes>
    </>
  );
}

export default App;

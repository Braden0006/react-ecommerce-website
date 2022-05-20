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
  const [addPlant, setAddPlant] = useState(0);

  return (
    <>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="app-container">
                {/* "CartContext.Provider" is used to avoid prop drilling, so any component that are inside those tags can utilize the "addPlant" state */}
                <CartContext.Provider value={{ addPlant, setAddPlant }}>
                  <div className="homepage">
                    <Navbar />
                    <HomePage />
                  </div>
                  <Information />
                  <ProductPage />
                </CartContext.Provider>
              </div>
            }
          />
          <Route path="/viewcart/*" element={<ViewCart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;

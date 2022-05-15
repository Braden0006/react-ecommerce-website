import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <div className="homepage">
            <Navbar />
            <HomePage />
          </div>
          <Information />
          <ProductPage />
        </div>
      </Router>
    </>
  );
}

export default App;

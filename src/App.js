import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Information from './components/Information';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="app-container">
      <div className="homepage">
        <Navbar />
        <HomePage />
      </div>
      <Information />
      <ProductPage />
    </div>
  )
}

export default App;

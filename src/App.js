import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Information from './components/Information';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="homepage">
        <Navbar />
        <HomePage />
      </div>
      <Information />
    </div>
  )
}

export default App;

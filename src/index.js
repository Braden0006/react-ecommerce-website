import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrapped the "App" component with the Router tags so we can navigate to different parts of the components with links */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

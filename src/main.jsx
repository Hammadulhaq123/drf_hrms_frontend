import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextAPI } from "./context/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAPI>
      <Router>
        <App />
      </Router>
    </ContextAPI>
  </React.StrictMode>
);

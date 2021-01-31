import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProvideCart } from "./hooks/useCart";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProvideCart>
      <App />
    </ProvideCart>
  </React.StrictMode>,
  document.getElementById("root")
);

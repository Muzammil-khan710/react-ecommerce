import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/Cart-context";
import { WishlistProvider } from "./context/Wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

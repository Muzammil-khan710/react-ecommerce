import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/Cart-context";
import { WishlistProvider } from "./context/Wishlist-context";
import { AuthProvider } from "./context/Auth-context";
import { ProductsProvider } from "./context/Product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

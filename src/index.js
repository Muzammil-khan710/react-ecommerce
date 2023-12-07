import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/Cart-context";
import { WishlistProvider } from "./context/Wishlist-context";
import { AuthProvider } from "./context/Auth-context";
import { ProductsProvider } from "./context/Product-context";
import { FilterProvider } from "./context/Filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </FilterProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

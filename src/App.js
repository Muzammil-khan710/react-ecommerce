import "./main.css";
import { Routes, Route } from "react-router-dom"
import { Authroute } from './Components/Authroute';
import { Privateroute } from "./Components/Privateroute";
import { CartPage, HomePage, LoginPage, ProductDetailsPage, ProductsPage, SignupPage, WishlistPage } from "./pages/index";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage/>} />
        <Route element={<Authroute/>}>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Route>

        <Route element={<Privateroute/>}>
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
        </Route>
      </Routes>
      <Toaster/>
      </>
  );
}

export default App;


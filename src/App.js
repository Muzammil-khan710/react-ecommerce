import "./App.css";
import { Footer, Navbar, Homepage, LoginPage, SignupPage, CartPage, WishlistPage } from "./Components/Allcomps";
import { ProductsPage } from "./Components/Products/ProductsPage";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Signup" element={<SignupPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


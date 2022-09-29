import "./App.css";
import { CartPage, WishlistPage } from "./Components/Allcomps";
import { ProductsPage } from "./Components/Products/ProductsPage";
import { Routes, Route } from "react-router-dom"
import Mockman from "mockman-js";
import { Authroute } from './Components/Authroute';
import { Privateroute } from "./Components/Privateroute";
import { Homepage, LoginPage, SignupPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/mockman" element={<div className="MockAPI"><Mockman /></div>}/>
        <Route path="/products" element={<ProductsPage/>} />

        <Route element={<Authroute/>}>
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Signup" element={<SignupPage/>} />
        </Route>

        <Route element={<Privateroute/>}>
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


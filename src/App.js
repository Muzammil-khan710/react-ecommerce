import "./App.css";
import { Routes, Route } from "react-router-dom"
import Mockman from "mockman-js";
import { Authroute } from './Components/Authroute';
import { Privateroute } from "./Components/Privateroute";
import { CartPage, HomePage, LoginPage, ProductsPage, SignupPage, WishlistPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
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


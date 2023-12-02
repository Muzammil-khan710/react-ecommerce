import "./main.css";
import { Routes, Route } from "react-router-dom"
import Mockman from "mockman-js";
import { Authroute } from './Components/Authroute';
import { Privateroute } from "./Components/Privateroute";
import { CartPage, HomePage, LoginPage, ProductsPage, SignupPage, WishlistPage } from "./pages/index";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/mockman" element={<div className="MockAPI"><Mockman /></div>}/>
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<SingleProductPage/>} />
        <Route element={<Authroute/>}>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
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


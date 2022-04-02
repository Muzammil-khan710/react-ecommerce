import "./App.css";
import { Footer, Navbar, Homepage } from "./Components/Allcomps";
import { ProductsPage } from "./Components/Products/ProductsPage";
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./Components/Login/Login";
import { SignupPage } from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Signup" element={<SignupPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


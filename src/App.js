import "./App.css";
import { Footer, Navbar, Homepage } from "./Components/Allcomps";
import { ProductsPage } from "./Components/Products/ProductsPage";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


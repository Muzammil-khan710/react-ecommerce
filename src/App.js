import "./App.css";
import { Footer, Navbar, Homepage } from "./Components/Allcomps";
import { ProductsPage } from "./Components/Products/ProductsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <ProductsPage/>
      <Footer />
    </div>
  );
}

export default App;


import "./App.css";
import { Footer, Navbar } from "./Components/Allcomps";
import { Homepage } from "./Components/Homepage/Homepage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbars } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Home from "./pages/Home/home";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

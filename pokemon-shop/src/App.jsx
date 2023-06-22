import "./App.css";
import CartShopping from "./page/Cart/CartShopping";
import DashBroad from "./page/DashBroad/DashBroad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/dashbroad" element={<DashBroad />} />
            <Route path="/cart" element={<CartShopping />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

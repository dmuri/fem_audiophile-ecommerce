import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Category from "./routes/category.jsx";
import Checkout from "./routes/checkout.jsx";
import Product from "./routes/product.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="product/:slug" element={<Product />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

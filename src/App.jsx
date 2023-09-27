import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Category from "./routes/category.jsx";
import Checkout from "./routes/checkout.jsx";
import Home from "./routes/home.jsx";
import Product from "./routes/product.jsx";
import Root from "./routes/root.jsx";

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

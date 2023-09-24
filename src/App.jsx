import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Category from "./routes/category.jsx";
import Checkout from "./routes/checkout.jsx";
import Product from "./routes/product.jsx";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
      <Outlet />
    </RouterProvider>
  );
}

export default App;

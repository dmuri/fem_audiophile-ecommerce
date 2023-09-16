import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Category from "./routes/category.jsx";
import Checkout from "./routes/checkout.jsx";
import Product from "./routes/product.jsx";

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
      <Outlet />
    </RouterProvider>
  );
}

export default App;

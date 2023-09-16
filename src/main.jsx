import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

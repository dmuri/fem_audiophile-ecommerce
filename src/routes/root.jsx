import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import BrandEngagement from "../components/BrandEngagement.jsx";
import Footer from "../components/Footer.jsx";
import Cart from "../components/Cart.jsx";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Cart />
        <Outlet />
        <BrandEngagement />
      </main>
      <Footer />
    </>
  );
};

export default Root;

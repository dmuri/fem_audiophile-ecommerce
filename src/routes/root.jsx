import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import BrandEngagement from "../components/BrandEngagement.jsx";
import Footer from "../components/Footer.jsx";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BrandEngagement />
      <Footer />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import BrandEngagement from "../components/BrandEngagement.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="px-2 sm:px-7">
        <div className=" mx-auto max-w-[70rem] ">
          <Outlet />
          <BrandEngagement />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Root;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <img src="/assets/shared/desktop/logo.svg" alt="" />
      <ul className="text-white uppercase">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/headphones"}>Headphones</Link>
        </li>
        <li>
          <Link to={"/category/speakers"}>speakers</Link>
        </li>
        <li>
          <Link to={"/category/earphones"}>earphones</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

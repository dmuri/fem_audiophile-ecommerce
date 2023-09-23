import CategoryList from "../components/CategoryList.jsx";
import { Link } from "react-router-dom";
import FeaturedProductList from "../components/FeaturedProductList";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <Link className="uppercase" to="/product/xx99-mark-two-headphones">
        XX99 Mark II Headphones
      </Link>
      <br />
      <br />
      <CategoryList />
      <FeaturedProductList />
    </div>
  );
};

export default Home;

import CategoryList from "../components/CategoryList.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <Link to="/product/zx9-speaker">FEATURES PRODUCT</Link>
      <br />
      <br />
      <CategoryList />
    </div>
  );
};

export default Home;

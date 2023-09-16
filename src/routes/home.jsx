import CategoryList from "../components/CategoryList.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <br />
      <br />
      <Link to="/product/zx9-speaker">LINK</Link>
      <br />
      <br />
      <CategoryList />
    </div>
  );
};

export default Home;

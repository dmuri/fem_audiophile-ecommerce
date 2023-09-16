import { getAllCategories } from "../data/handleData.js";
import { Link } from "react-router-dom";
const CategoryList = () => {
  const categories = getAllCategories();
  return (
    <>
      {categories.map((category) => (
        <Link key={category} to={`category/${category}`}>
          <br />
          {category}
        </Link>
      ))}
      <br />
      <br />
    </>
  );
};

export default CategoryList;

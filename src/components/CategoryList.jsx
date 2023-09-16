import { getAllCategories } from "../handleData.js";
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
      ;
    </>
  );
};

export default CategoryList;

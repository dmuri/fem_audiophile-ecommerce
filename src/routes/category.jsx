import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "../data/handleData.js";

const Category = () => {
  const productByCategory = getProductsByCategory(useParams().category);
  console.log(productByCategory);
  return (
    <>
      <br />
      <br />
      <ul>
        {productByCategory.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <br />
    </>
  );
};

export default Category;

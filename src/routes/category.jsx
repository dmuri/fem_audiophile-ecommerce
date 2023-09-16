import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "../handleData.js";

const Category = () => {
  const productByCategory = getProductsByCategory(useParams().category);
  console.log(productByCategory);
  return (
    <>
      {productByCategory.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </div>
      ))}
    </>
  );
};

export default Category;

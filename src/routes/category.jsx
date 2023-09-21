import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "../data/handleData.js";

const Category = () => {
  const productByCategory = getProductsByCategory(useParams().category);
  // console.log(productByCategory);
  return (
    <>
      <br />
      <br />
      {productByCategory.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </div>
      ))}
      <br />
      <br />
    </>
  );
};

export default Category;

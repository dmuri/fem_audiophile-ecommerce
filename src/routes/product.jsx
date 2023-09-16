import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../handleData.js";

const Product = () => {
  const product = getProductsBySlug(useParams().slug);
  console.log(product);
  return (
    <>
      {product.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <p>{p.price}</p>
          <p>{p.description}</p>
          <p>{p.features}</p>
        </div>
      ))}
    </>
  );
};

export default Product;

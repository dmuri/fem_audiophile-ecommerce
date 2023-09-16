import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../data/handleData.js";
import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const product = getProductsBySlug(useParams().slug);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrement() {
    setQuantity((prev) => prev - 1);
  }

  return (
    <>
      {product.map((p) => (
        <div key={p.id}>
          <br />
          <p>{p.name}</p>
          <br />
          <p>{p.price}</p>
          <br />
          <p>{p.description}</p>
          <br />
          <br />
          <p>{p.features}</p>
          <br />
          <br />
          <button>Add to Cart</button>
          <p>Amount: {quantity}</p>
          <button onClick={handleDecrement}>Dec</button>
          <button onClick={handleIncrement}>Inc</button>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export default Product;

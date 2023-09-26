import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../data/handleData.js";
import ProductDecorativeGallery from "../components/DecorativeGallery";

const Product = () => {
  const [product] = getProductsBySlug(useParams().slug);
  return (
    <>
      {/* <GoBackButton /> */}
      {/* <ProductDetails product={product} /> */}
      <ProductDecorativeGallery slug={product.slug} />
    </>
  );
};

export default Product;

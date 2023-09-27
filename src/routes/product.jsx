import { useParams } from "react-router-dom";
import CategoryThumbnails from "../components/CategoryThumbnails.jsx";
import ProductDecorativeGallery from "../components/DecorativeGallery";
import GoBackButton from "../components/GoBackButton";
import ProductDetails from "../components/ProductDetails";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { getProductsBySlug } from "../data/handleData.js";

const Product = () => {
  const [product] = getProductsBySlug(useParams().slug);
  return (
    <>
      <GoBackButton />
      <ProductDetails product={product} />
      <ProductDecorativeGallery slug={product.slug} />
      <YouMayAlsoLike others={product.others} />
      <CategoryThumbnails />
    </>
  );
};

export default Product;

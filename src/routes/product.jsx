import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../data/handleData.js";
import GoBackButton from "../components/GoBackButton";
import ProductDecorativeGallery from "../components/DecorativeGallery";
import ProductDetails from "../components/ProductDetails";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import CategoryThumbnails from "../components/CategoryThumbnails.jsx";

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

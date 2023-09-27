import CategoryThumbnails from "../components/CategoryThumbnails.jsx";
import FeaturedProductList from "../components/FeaturedProductList";
import ProductSpotlight from "../components/ProductSpotlight";

const Home = () => {
  return (
    <div>
      <ProductSpotlight />
      <CategoryThumbnails />
      <FeaturedProductList />
    </div>
  );
};

export default Home;

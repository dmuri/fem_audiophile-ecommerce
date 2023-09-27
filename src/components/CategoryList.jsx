import { useNavigate, useParams } from "react-router-dom";
import { getProductsByCategory } from "../data/handleData.js";

const CategoryList = () => {
  const navigate = useNavigate();
  const productByCategory = getProductsByCategory(
    useParams().category,
  ).reverse();
  return (
    <>
      <div className="relative ">
        <div className="absolute top-0 z-50 h-[1px] w-full bg-red-300 bg-opacity-10"></div>
        <div>
          <h2 className="absolute -inset-x-[100vw]  bg-[#1A1A1A] pb-10 pt-8 text-center text-3xl font-bolder uppercase text-white md:pb-16 md:pt-12 md:text-5xl">
            {productByCategory[0].category}
          </h2>
        </div>
        <ul className="lg:gap-18 mb-56 flex flex-col items-center gap-32 pt-36 md:pt-60">
          {productByCategory.map((product, index) => (
            <li
              key={product.id}
              className=" group flex max-w-lg cursor-pointer flex-col items-center gap-5 text-center md:max-w-3xl md:gap-12 lg:max-w-none lg:flex-row lg:gap-24 lg:text-left"
              onClick={() => {
                navigate(`/product/${product.slug}`);
              }}
            >
              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-2" : ""
                } basis-1/2 overflow-hidden rounded-lg`}
              >
                <picture className=" w-full ">
                  <source
                    media="(max-width: 768px)"
                    srcSet={`${product.categoryImage.mobile}`}
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={`${product.categoryImage.tablet}`}
                  />
                  <img
                    className="transistion overflow-hidden rounded-2xl duration-100 group-hover:scale-105"
                    src={`${product.categoryImage.desktop}`}
                    alt="product"
                  />
                </picture>
              </div>
              <div className="flex basis-1/2 flex-col items-center gap-8 lg:items-start lg:gap-12">
                {product.new && (
                  <p className="text-14 text-custom-orange-d8">New product</p>
                )}
                <h3 className="text-28 md:text-4xl">{product.name}</h3>
                <p className="max-w-lg leading-[25px] opacity-50 lg:max-w-md">
                  {product.description}
                </p>
                <button
                  className="text-13 mt-2 w-40 bg-custom-orange-d8 py-3 uppercase text-white group-hover:bg-custom-orange-fb"
                  aria-label="Continue and proceed to payment"
                >
                  See product
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;

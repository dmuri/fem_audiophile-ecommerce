import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../data/handleData.js";
import { useState } from "react";
import useStore from "../store/index.js";
const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  // const [product] = getProductsBySlug(useParams().slug);

  const addProductToCart = useStore((state) => state.addProductToCart);
  const startUrl = `/assets/product-${product.slug}/`;

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrement() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  const handleAddToCart = (product) => {
    addProductToCart({ ...product, quantity });
    setQuantity(1);
  };
  return (
    <section className="grid gap-8 md:grid-cols-2 md:gap-x-20 lg:gap-20">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${startUrl}mobile/image-product.jpg`}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={`${startUrl}tablet/image-product.jpg`}
        />
        <img
          className="mx-auto w-full max-w-[515px] rounded-xl "
          src={`${startUrl}desktop/image-product.jpg`}
        />
      </picture>

      {/* Details */}
      <div className="flex flex-col gap-8 md:justify-center md:gap-12 ">
        {product.new && (
          <p className="text-14 text-custom-orange-d8">New Product</p>
        )}
        <p className="text-40 text-[1.75rem] ">{product.name}</p>
        <p className="font-bold leading-[25px] opacity-50">
          {product.description}
        </p>
        <p className="font-bolder tracking-[1.29px]">$ {product.price}</p>

        <div className=" flex items-center gap-4">
          <div className="flex basis-1/5 items-center justify-between gap-4 bg-gray-200">
            <button
              onClick={handleDecrement}
              className="px-5 py-3 hover:scale-125 hover:text-custom-orange-d8"
            >
              -
            </button>
            <p className="min-w-[14px] text-sm font-bolder ">{quantity}</p>
            <button
              onClick={handleIncrement}
              className="px-5 py-3 hover:scale-125 hover:text-custom-orange-d8"
            >
              +
            </button>
          </div>

          <div className="max-w-md  basis-2/3">
            <button
              onClick={() => handleAddToCart(product)}
              className=" text-md w-full  bg-custom-orange-d8 py-3 font-bolder  uppercase text-white xs:text-lg"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="md:col-span-2 lg:col-span-1">
        <p className="text-32 mb-8 mt-16 lg:m-0">Features</p>
        <p className="whitespace-pre-line font-bold leading-[25px] opacity-50 md:mb-10">
          {product.features}
        </p>
      </div>

      {/* In the box TITLE */}
      <p className="lg-row-end-3 text-32 mt-16 md:mt-0 md:self-start lg:col-start-2 lg:col-end-3 lg:row-start-2">
        In the box
      </p>

      {/* In the box */}
      <ul className="lg-row-end-3  lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:mt-16">
        {product.includes.map((include, index) => (
          <li key={index}>
            <div className="mb-3 flex gap-5">
              <p className="font-bolder text-custom-orange-d8">
                {include.quantity}x
              </p>
              <p className="font-bold opacity-50">{include.item}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductDetails;

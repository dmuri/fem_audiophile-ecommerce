import { useNavigate } from "react-router-dom";
const ProductSpotlight = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="sr-only">Audiophile E-commerce Shop</h1>
      <hr className="opacity-10" />
      <div
        onClick={() => {
          navigate("/product/xx99-mark-two-headphones");
        }}
        className="group relative flex cursor-pointer flex-col items-center justify-start bg-[#1A1A1A] md:h-[567px]  md:flex-row  lg:mb-44"
      >
        <div className="absolute bottom-32 z-10 flex flex-col items-center gap-5 self-center text-center sm:top-64    md:static md:items-start md:text-left">
          <p className="text-14 text-white opacity-50">New product</p>
          <h2 className=" max-w-none text-4xl font-bolder uppercase text-white sm:text-6xl md:max-w-[20ch] md:text-4xl lg:text-6xl  ">
            XX99 Mark II Headphones
          </h2>
          <p className="text-15 max-w-[40ch] text-white opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="text-13 mt-2 w-40 bg-custom-orange-d8 py-3 uppercase text-white group-hover:bg-custom-orange-fb"
            aria-label="Continue and proceed to payment"
          >
            See product
          </button>
        </div>

        <div className="-translate-y-24  bg-[#1A1A1A] sm:-translate-y-36 md:max-w-[611px] md:flex-shrink-0 md:basis-2/3 md:translate-y-0 lg:min-w-[558px]">
          <picture className="flex-1 rounded-lg">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/home/mobile/image-header.jpg"
            />
            <img
              className="object-right-center w-full object-cover  md:h-[567px]"
              src="/assets/home/desktop/cropped-image-hero2.jpg"
              alt="Responsive content"
            />
          </picture>
        </div>

        <div className="absolute -inset-x-[9999px] bottom-0 -z-10 h-[120%] basis-1 bg-[#1a1a1a] "></div>
      </div>
    </>
  );
};

export default ProductSpotlight;

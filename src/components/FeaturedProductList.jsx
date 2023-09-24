import { useNavigate } from "react-router-dom";
const FeaturedProductList = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-12">
      <div
        onClick={() => navigate("product/zx9-speaker")}
        className="group relative z-0  mb-6 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-custom-orange-d8 md:flex-row md:items-end md:justify-items-center"
      >
        <div className="z-0 flex justify-center md:basis-3/5">
          <div className="relative ">
            <img
              className="z-20 mx-auto -mb-2 h-auto w-[200px] px-4 pt-24 transition group-hover:scale-[105%] md:w-[400px]"
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="Responsive content"
            />
            <svg
              className="absolute -right-[360px] -top-[240px] -z-50 transition duration-100 group-hover:scale-125 md:-right-[280px] md:-top-16 "
              width="944"
              height="944"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
              </g>
            </svg>
          </div>
        </div>
        <div className="mb-16 mt-16 flex flex-col items-center gap-4 self-center text-center text-white md:basis-2/5 md:items-start md:text-left">
          <p className="text-56 max-w-[7ch] ">ZX9 Speaker</p>
          <p className="max-w-[35ch] opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className=" z-20 w-[180px] whitespace-nowrap border border-black  bg-black py-3 font-bolder uppercase group-hover:bg-white group-hover:text-black">
            See Product
          </button>
        </div>
      </div>

      <div className="group relative mb-6 cursor-pointer overflow-hidden rounded-lg">
        <picture>
          <source
            media="(max-width: 420px)"
            srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
          />
          <img
            className="rounded-r-lg transition group-hover:-translate-x-2 group-hover:scale-[105%]"
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            alt="Responsive content"
          />
        </picture>
        <div className="absolute left-[5%] top-[35%] ">
          <p className="text-28  mb-5">ZX7 Speaker</p>
          <button
            className=" w-[120px] whitespace-nowrap border border-black py-3   font-bolder uppercase group-hover:bg-black group-hover:text-white sm:w-[180px]"
            onClick={() => {
              navigate("/product/zx7-speaker");
            }}
          >
            See product
          </button>
        </div>
      </div>

      <div className=" group flex cursor-pointer flex-col gap-4 overflow-hidden sm:flex-row">
        <picture className="flex-1 rounded-lg">
          <source
            media="(max-width: 480px)"
            srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            className="rounded-lg transition duration-100 group-hover:-translate-x-2 group-hover:scale-105 group-hover:rounded-lg"
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="Responsive content"
          />
        </picture>
        <div className=" flex flex-1 flex-col justify-center gap-8 rounded-lg bg-gray-200 px-4 py-6 md:pl-[10%]">
          <p className="text-28">YX1 Earphones</p>
          <button
            className=" w-[120px] whitespace-nowrap border border-black py-3   font-bolder uppercase group-hover:bg-black group-hover:text-white sm:w-[180px]"
            onClick={() => {
              navigate("/product/yx1-earphones");
            }}
          >
            See product
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductList;

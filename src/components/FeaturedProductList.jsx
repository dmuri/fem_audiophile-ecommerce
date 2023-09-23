import { useNavigate } from "react-router-dom";
const FeaturedProductList = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div
        onClick={() => navigate("product/zx9-speaker")}
        className="group relative z-0  flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-custom-orange-d8 md:flex-row md:items-end md:justify-items-center"
      >
        <div className="z-0 flex justify-center md:basis-3/5">
          <div className="relative ">
            <img
              className="z-20 mx-auto -mb-2 h-auto w-[200px] px-4 pt-24 md:w-[400px]"
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="Responsive content"
            />
            <svg
              className="absolute -right-[360px] -top-[240px] -z-50 md:-right-[280px] md:-top-16"
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
        <div className="mb-16 mt-16 flex flex-col items-center gap-4 self-center text-center text-white md:basis-2/5 md:text-left">
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

      <div></div>
    </section>
  );
};

export default FeaturedProductList;

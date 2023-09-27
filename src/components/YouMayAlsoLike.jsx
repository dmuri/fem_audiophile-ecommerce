import { useNavigate } from "react-router-dom";
const YouMayAlsoLike = ({ others }) => {
  const navigate = useNavigate();
  const url = others[0].image.tablet;
  console.log(url);
  return (
    <div className=" mb-56 flex flex-col items-center md:mb-44 lg:mb-56">
      <h2 className=" text-2xl font-bolder uppercase md:text-3xl">
        You may also like
      </h2>
      <ul className="items center flex flex-col md:flex-row md:gap-3">
        {others.map((other) => (
          <li
            key={other.slug}
            className="group mt-10 flex cursor-pointer flex-col items-center gap-4 overflow-hidden"
            onClick={() => navigate(`/product/${other.slug}`)}
          >
            <picture className="overflow-hidden">
              <source
                media="(max-width: 768px)"
                srcSet={`${other.image.mobile}`}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={`${other.image.tablet}`}
              />
              <img
                className="transform rounded-lg duration-100 group-hover:scale-105"
                srcSet={`${other.image.desktop}`}
              />
            </picture>
            <h3 className="text-2xl font-bolder uppercase tracking-[1.7px]">
              {other.name}
            </h3>
            <button
              onClick={() => navigate(`/product/${other.slug}`)}
              className="rounded-sm bg-custom-orange-d8 px-6 py-3 text-xs font-bolder uppercase text-white group-hover:bg-custom-orange-fb xs:text-lg"
              aria-label="see product"
            >
              See product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouMayAlsoLike;

import { getAllCategories } from "../data/handleData.js";
import { useNavigate } from "react-router-dom";
const CategoryThumbnails = () => {
  const categories = getAllCategories();
  const navigate = useNavigate();
  return (
    <ul className=" my-28 flex flex-col gap-24 md:flex-row md:gap-12">
      {categories.map((category) => (
        <li key={category} className=" group basis-1/3">
          <button
            className="w-full"
            aria-label="Goto category"
            onClick={() => {
              navigate(`/category/${category}`);
            }}
          >
            <div className="relative flex min-h-[200px] flex-col items-center justify-end rounded-lg bg-gray-200 ">
              <img
                className="absolute w-full max-w-[220px] -translate-y-1/3 transition-transform duration-100 group-hover:scale-110"
                src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                alt="category"
              />
              <h2 className="text-18 mb-2 uppercase">{category}</h2>
              <div className="mb-8 flex items-center gap-3">
                <p className="text-sm uppercase opacity-50 transition duration-100 group-hover:text-custom-orange-d8">
                  shop
                </p>
                <svg
                  className="transition duration-100 group-hover:translate-x-[2px] group-hover:scale-110"
                  width="8"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </button>
          <br />
        </li>
      ))}
    </ul>
  );
};

export default CategoryThumbnails;

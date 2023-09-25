import { getAllCategories } from "../data/handleData.js";
import { useNavigate } from "react-router-dom";
const CategoryThumbnails = () => {
  const categories = getAllCategories();
  const navigate = useNavigate();
  return (
    <div className="absolute inset-x-0 left-0 top-36 rounded-b-lg bg-amber-300">
      <ul className="flex flex-col items-end justify-between bg-white sm:flex-row ">
        {categories.map((category) => (
          <li key={category} className=" basis-1/3">
            <button
              className="w-full"
              aria-label="Goto category"
              onClick={() => {
                navigate(`category/${category}`);
              }}
            >
              <div className="relative flex h-[140px] translate-y-8 flex-col items-center justify-end rounded-lg bg-gray-200">
                <img
                  className="absolute bottom-10 w-full "
                  src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                  alt=""
                />
                <p className="">{category}</p>
                <div className="">
                  <p className="text-sm uppercase opacity-50 ">shop</p>
                  <svg
                    className=""
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
    </div>
  );
};

export default CategoryThumbnails;

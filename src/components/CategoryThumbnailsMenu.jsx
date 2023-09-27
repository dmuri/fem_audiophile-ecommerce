import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../data/handleData.js";
const CategoryThumbnailsMenu = ({ setMobileNavToggle }) => {
  const categories = getAllCategories();
  const navigate = useNavigate();
  return (
    <>
      <div className="relative -z-10">
        <div
          className="fixed inset-0 z-40  items-center justify-center bg-[rgba(0,0,0,0.4)] sm:flex-row"
          onClick={() => setMobileNavToggle(false)}
        ></div>
      </div>
      <div className="absolute inset-x-0 top-20 z-10  w-full rounded-lg bg-white px-12">
        <ul className=" my-28 flex flex-col gap-24 md:gap-12">
          {categories.map((category) => (
            <li key={category} className=" group basis-1/3">
              <button
                className="w-full"
                aria-label="Goto category"
                onClick={() => {
                  navigate(`category/${category}`);
                  setMobileNavToggle(false);
                }}
              >
                <div className="relative flex min-h-[200px] flex-col items-center justify-end rounded-lg bg-gray-200 ">
                  <img
                    className="absolute w-full max-w-[220px] -translate-y-1/3 transition-transform duration-100 group-hover:scale-110"
                    src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
                    alt="category"
                  />
                  <p className="text-18 mb-2 uppercase">{category}</p>
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
      </div>
    </>
  );
};

export default CategoryThumbnailsMenu;

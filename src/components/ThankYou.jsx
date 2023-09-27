import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/index.js";

const ThankYou = ({ setShowThankYou, cart, formattedGrandTotal }) => {
  const navigate = useNavigate();
  const clearCart = useStore((state) => state.clearCart);

  //   Prevent scrolling on page behind ThankYou-modal
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-5 rounded-lg bg-white p-12 md:min-w-[540px] ">
        <img
          className="h-12 w-12"
          src="/assets/checkout/icon-order-confirmation.svg"
          alt=""
        />
        <h2 className="text-32">
          Thank you <br /> for your order
        </h2>
        <p className="text-md opacity-50">
          You will receive an email confirmation shortly
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1  rounded-t-lg bg-gray-200 px-5 sm:rounded-none sm:rounded-l-lg">
            {cart.map((product) => (
              <div className=" my-4 flex gap-4" key={product.slug}>
                <img
                  className="h-8 w-8 rounded-lg"
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  alt="image of product"
                />
                <div className="">
                  <p className="text-md font-bolder">{product.short}</p>
                  <p className="text-sm font-bolder opacity-50">
                    $ {product.price}
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-md font-bolder opacity-50">
                    x{product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-row items-center justify-center gap-1 rounded-b-lg bg-black px-5 py-3 sm:flex-col sm:items-start sm:rounded-none sm:rounded-r-lg sm:py-0">
            <p className="uppercase text-white opacity-50 ">Grand total</p>
            <p className="text-lg font-bolder text-white">
              $ {formattedGrandTotal}
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[500px] justify-center ">
          <button
            onClick={() => {
              setShowThankYou(false);
              navigate("/", {
                replace: true,
              });
              clearCart();
            }}
            className="text-13 mt-2 w-full bg-custom-orange-d8 py-3 uppercase text-white hover:bg-custom-orange-fb"
            aria-label="Navigate home"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;

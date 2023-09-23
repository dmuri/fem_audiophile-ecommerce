import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ThankYou = ({ setShowThankYou, cart, formattedGrandTotal }) => {
  const navigate = useNavigate();

  //   Prevent scrolling on page behind ThankYou-modal
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed z-10 inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="md:min-w-[540px] flex flex-col gap-5 bg-white p-12 rounded-lg ">
        <img
          className="w-12 h-12"
          src="/assets/checkout/icon-order-confirmation.svg"
          alt=""
        />
        <p className="text-32">
          Thank you <br /> for your order
        </p>
        <p className="text-md opacity-50">
          You will receive an email confirmation shortly
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1  bg-gray-200 rounded-t-lg sm:rounded-none sm:rounded-l-lg px-5">
            {cart.map((product) => (
              <div className=" flex gap-4 my-4" key={product.slug}>
                <img
                  className="h-8 w-8 rounded-lg"
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  alt=""
                />
                <div className="">
                  <p className="font-bolder text-md">{product.short}</p>
                  <p className="font-bolder text-sm opacity-50">
                    $ {product.price}
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="font-bolder opacity-50 text-md">
                    x{product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-row items-center sm:items-start sm:flex-col justify-center py-3 sm:py-0 px-5 gap-1 bg-black rounded-b-lg sm:rounded-none sm:rounded-r-lg">
            <p className="text-white uppercase opacity-50 ">Grand total</p>
            <p className="text-white font-bolder text-lg">
              $ {formattedGrandTotal}
            </p>
          </div>
        </div>

        <div className="w-full max-w-[500px] flex justify-center ">
          <button
            onClick={
              (() => setShowThankYou(false),
              () => {
                navigate("/", {
                  replace: true,
                });
              })
            }
            className="bg-custom-orange-d8 text-13 py-3 mt-2 w-full text-white uppercase"
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

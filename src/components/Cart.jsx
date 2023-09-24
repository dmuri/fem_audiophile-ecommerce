import useStore from "../store/index.js";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const removeProductFromCart = useStore(
    (state) => state.removeProductFromCart,
  );
  const clearCart = useStore((state) => state.clearCart);
  const incrementQuantity = useStore((state) => state.incrementProductQuantity);
  const decrementQuantity = useStore((state) => state.decrementProductQuantity);
  const total = useStore((state) => state.getFormattedTotal(state));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ml-auto">
      {cart.length > 0 && (
        <div className="absolute right-[3px] top-[4px] h-4 w-4 rounded-full bg-custom-orange-d8"></div>
      )}
      <button
        className="group mx-auto p-3 hover:fill-custom-orange-d8 "
        aria-label="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            className="group-hover:fill-custom-orange-d8"
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.4)]"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="absolute  right-2 top-20   z-20 w-[17rem] rounded-lg bg-white p-6 sm:w-[23.5rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <p className="text-18">
                {cart.length > 0 ? `Cart (${cart.length})` : `Cart`}
              </p>
              <button
                aria-label="Clear cart"
                onClick={clearCart}
                className="opacity-50 hover:text-custom-orange-d8"
              >
                Remove Cart
              </button>
            </div>
            {cart.map((product) => (
              <div className=" my-4 flex items-center gap-4" key={product.slug}>
                <img
                  className="h-8 w-8 rounded-lg sm:h-16 sm:w-16"
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  alt=""
                />
                <div className="">
                  <p className="text-md font-bolder">{product.short}</p>
                  <p className="text-sm font-bolder opacity-50">
                    $ {product.price}
                  </p>
                </div>
                <div className="ml-auto flex items-center rounded-md bg-gray-200">
                  <button
                    onClick={() => decrementQuantity(product.slug)}
                    className="px-5 py-2 hover:scale-125 hover:text-custom-orange-d8"
                  >
                    -
                  </button>
                  <p className="min-w-[14px] text-sm font-bolder ">
                    {product.quantity}
                  </p>
                  <button
                    onClick={() => incrementQuantity(product.slug)}
                    className="px-5 py-2 hover:scale-125 hover:text-custom-orange-d8"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <hr className="mt-5" />
            {cart.length === 0 ? (
              <div className="flex justify-center">
                <p className="text-15 my-8 font-bolder uppercase opacity-50">
                  Cart is empty
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 mt-8 flex items-center justify-between">
                  <p className="font-bold uppercase opacity-50">Total</p>
                  <p className="text-lg font-bolder">$ {total}</p>
                </div>

                <button
                  className="text-13 mt-2 w-full bg-custom-orange-d8 py-3 uppercase text-white"
                  aria-label="Navigate home"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/checkout");
                  }}
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useForm } from "react-hook-form";
import GoBackButton from "../components/GoBackButton.jsx";
import React, { useEffect, useRef, useState } from "react";
import useStore from "../store/index.js";
import ThankYou from "../components/ThankYou.jsx";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cart = useStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const vat = total * 0.2;
  const formattedTotal = total.toLocaleString();
  const formattedVat = Math.floor(vat).toLocaleString();
  const shipping = 50;
  const formattedGrandTotal = Math.round(shipping + total).toLocaleString();

  const [showThankYou, setShowThankYou] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setShowThankYou(true);
  };

  const paymentMethod = watch("payment");

  return (
    <>
      <Navbar />
      <main className="bg-gray-200 sm:px-8 lg:px-20 xl:px-44">
        <GoBackButton />
        {showThankYou && (
          <ThankYou
            cart={cart}
            formattedGrandTotal={formattedGrandTotal}
            setShowThankYou={setShowThankYou}
          />
        )}

        <div className="mb-12 flex flex-col justify-around gap-12 lg:mb-28 lg:flex-row">
          <form
            className="grid flex-1 grid-cols-[1fr] gap-4 rounded-2xl bg-white p-12 sm:grid-cols-[1fr_1fr] md:min-w-[490px]"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className="text-32 sm:col-span-2 ">Checkout</p>
            <p className="text-13 mt-8 text-custom-orange-d8 sm:col-span-2">
              Billing details
            </p>
            <label className=" font-bolder">
              Name
              <input
                className={`mt-1 flex w-full flex-col rounded-lg border p-4 font-normal  `}
                type="text"
                placeholder="Alexei Ward"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              {errors.name && (
                <p className="my-1 text-xs text-custom-error">
                  {errors.name?.message}
                </p>
              )}
            </label>
            <label className=" font-bolder">
              <div className="flex items-end justify-between">
                Email Address
              </div>
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("email", {
                  validate: (value) => {
                    if (!value) return "Email is required";
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                    )
                      return "Invalid email address";
                    return true;
                  },
                })}
                type="email"
                placeholder="alexei@mail.com"
              />
              {errors.email && (
                <p className="my-1 text-xs text-custom-error">
                  {errors.email?.message}
                </p>
              )}
            </label>
            <label className=" font-bolder">
              Phone Number
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
                placeholder="+47 443 98 836"
                type="number"
              />
              <p className="my-1 text-xs text-custom-error">
                {errors.phone?.message}
              </p>
            </label>
            <p className="text-13 mt-8 text-custom-orange-d8 sm:col-span-2">
              Shipping info
            </p>
            <label className="font-bolder sm:col-span-2">
              Address
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
                placeholder="Refstadsvingen 17"
              />
              <p className="my-1 text-xs text-custom-error">
                {errors.address?.message}
              </p>
            </label>
            <label className="font-bolder">
              Zip Code
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("zip", {
                  required: {
                    value: true,
                    message: "Zip number is required",
                  },
                })}
                placeholder="0584"
                type="number"
              />
              <p className="my-1 text-xs text-custom-error">
                {errors.zip?.message}
              </p>
            </label>
            <label className="font-bolder">
              City
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                placeholder="Oslo"
              />
              <p className="my-1 text-xs text-custom-error">
                {errors.zip?.message}
              </p>
            </label>
            <label className="font-bolder">
              County
              <input
                className="mt-1 flex w-full flex-col rounded-lg border p-4 font-normal"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                })}
                placeholder="Norway"
              />
              <p className="my-1 text-xs text-custom-error">
                {errors.country?.message}
              </p>
            </label>
            <p className="text-13 mt-8 text-custom-orange-d8 sm:col-span-2">
              Payment Details
            </p>
            <div className="font-bolder">Payment Method</div>

            <label
              className={` rounded-lg border-[1px] p-[1rem] hover:border-orange-400  sm:col-start-2 ${
                paymentMethod === "cash"
                  ? "border-custom-orange-d8"
                  : "border-[#CFCFCF]"
              }`}
              htmlFor="cash"
            >
              <input
                className="mt-1 flex w-full flex-col rounded-lg p-4 font-normal"
                {...register("payment")}
                type="radio"
                value="cash"
                id="cash"
              />
              Cash on Deliver
            </label>

            <label
              className={`rounded-lg border-[1px]   p-[1rem] hover:border-orange-400 sm:col-start-2 ${
                paymentMethod === "emoney"
                  ? "border-custom-orange-d8"
                  : "border-[#CFCFCF]"
              }`}
              htmlFor="emoney"
            >
              <input
                className=" mt-1 w-full flex-col rounded-lg border p-4 font-normal"
                {...register("payment")}
                type="radio"
                value="emoney"
                id="emoney"
              />
              e-Money
            </label>
            <label
              htmlFor="emoney-number"
              className={`
                ${paymentMethod === "emoney" ? " " : "invisible "}
                  font-bolder
              `}
            >
              e-Money Number
              <input
                className=" mt-1 flex w-full flex-col rounded-lg border p-4 font-normal lg:mb-12"
                {...register("emoney-number")}
                type="number"
                id="emoney-number"
                placeholder="238521993"
              />
            </label>
            <label
              htmlFor="emoney-pin"
              className={`
                ${
                  paymentMethod === "emoney"
                    ? " "
                    : "hidden lg:invisible lg:block "
                }
                  font-bolder
              `}
            >
              e-Money Pin
              <input
                className="mt-1 block w-full rounded-lg border p-4 font-normal lg:mb-12"
                {...register("emoney-pin")}
                type="password"
                id="emoney-pin"
                placeholder="6891"
              />
            </label>
          </form>

          <div className="flex-1 rounded-xl bg-white p-12 lg:max-w-lg lg:self-start ">
            <p className="text-18">Summary</p>
            <div>
              {cart.map((product) => (
                <div className="my-4 flex gap-4" key={product.slug}>
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={`/assets/cart/image-${product.slug}.jpg`}
                    alt=""
                  />
                  <div className="">
                    <p className="text-lg font-bolder">{product.short}</p>
                    <p className="font-bolder opacity-50">$ {product.price}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-lg font-bolder opacity-50">
                      x{product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase opacity-50">total</p>
              <p className="text-lg font-bolder">$ {formattedTotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase opacity-50">shipping</p>
              <p className="text-lg font-bolder">$ {shipping}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase opacity-50">vat (included)</p>
              <p className="text-lg font-bolder">$ {formattedVat}</p>
            </div>
            <div className="my-4 flex justify-between">
              <p className="font-bold uppercase opacity-50">Grand total</p>
              <p className="text-lg font-bolder text-custom-orange-d8">
                $ {formattedGrandTotal}
              </p>
            </div>
            <div className="flex w-full justify-center ">
              <button
                onClick={handleSubmit(onSubmit)}
                className="text-13 mt-2 w-full bg-custom-orange-d8 py-3 uppercase text-white hover:bg-custom-orange-fb"
                aria-label="Continue and proceed to payment"
              >
                Continue & pay
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;

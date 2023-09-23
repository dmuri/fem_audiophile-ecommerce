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

        <div className="flex flex-col justify-around mb-12 lg:mb-28 gap-12 lg:flex-row ">
          <form
            className="bg-white rounded-2xl p-12 flex-1 md:min-w-[490px] grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className="sm:col-span-2 text-32 ">Checkout</p>
            <p className="sm:col-span-2 text-13 text-custom-orange-d8 mt-8">
              Billing details
            </p>
            <label className=" font-bolder">
              Name
              <input
                className={`flex flex-col w-full p-4 border rounded-lg mt-1 font-normal  `}
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
                <p className="text-custom-error text-xs my-1">
                  {errors.name?.message}
                </p>
              )}
            </label>
            <label className=" font-bolder">
              <div className="flex justify-between items-end">
                Email Address
              </div>
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("email", {
                  validate: (value) => {
                    if (!value) return "Email is required"; // If email is not provided
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                    )
                      return "Invalid email address"; // If email doesn't match the regex
                    return true; // Valid email
                  },
                })}
                type="email"
                placeholder="alexei@mail.com"
              />
              {errors.email && (
                <p className="text-custom-error text-xs my-1">
                  {errors.email?.message}
                </p>
              )}
            </label>
            <label className=" font-bolder">
              Phone Number
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
                placeholder="+47 443 98 836"
                type="number"
              />
              <p className="text-custom-error text-xs my-1">
                {errors.phone?.message}
              </p>
            </label>
            <p className="mt-8 sm:col-span-2 text-13 text-custom-orange-d8">
              Shipping info
            </p>
            <label className="font-bolder sm:col-span-2">
              Address
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
                placeholder="Refstadsvingen 17"
              />
              <p className="text-custom-error text-xs my-1">
                {errors.address?.message}
              </p>
            </label>
            <label className="font-bolder">
              Zip Code
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("zip", {
                  required: {
                    value: true,
                    message: "Zip number is required",
                  },
                })}
                placeholder="0584"
                type="number"
              />
              <p className="text-custom-error text-xs my-1">
                {errors.zip?.message}
              </p>
            </label>
            <label className="font-bolder">
              City
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                placeholder="Oslo"
              />
              <p className="text-custom-error text-xs my-1">
                {errors.zip?.message}
              </p>
            </label>
            <label className="font-bolder">
              County
              <input
                className="flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                })}
                placeholder="Norway"
              />
              <p className="text-custom-error text-xs my-1">
                {errors.country?.message}
              </p>
            </label>
            <p className="mt-8 sm:col-span-2 text-13 text-custom-orange-d8">
              Payment Details
            </p>
            <div className="font-bolder">Payment Method</div>

            <label
              className={` p-[1rem] border-[1px] rounded-lg sm:col-start-2  hover:border-orange-400 ${
                paymentMethod === "cash"
                  ? "border-custom-orange-d8"
                  : "border-[#CFCFCF]"
              }`}
              htmlFor="cash"
            >
              <input
                className="flex flex-col w-full p-4 rounded-lg mt-1 font-normal"
                {...register("payment")}
                type="radio"
                value="cash"
                id="cash"
              />
              Cash on Deliver
            </label>

            <label
              className={`p-[1rem] border-[1px]   rounded-lg sm:col-start-2 hover:border-orange-400 ${
                paymentMethod === "emoney"
                  ? "border-custom-orange-d8"
                  : "border-[#CFCFCF]"
              }`}
              htmlFor="emoney"
            >
              <input
                className=" flex-col w-full p-4 border rounded-lg mt-1 font-normal"
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
                className=" lg:mb-12 flex flex-col w-full p-4 border rounded-lg mt-1 font-normal"
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
                    : "hidden lg:block lg:invisible "
                }
                  font-bolder
              `}
            >
              e-Money Pin
              <input
                className="block lg:mb-12 w-full p-4 border rounded-lg mt-1 font-normal"
                {...register("emoney-pin")}
                type="password"
                id="emoney-pin"
                placeholder="6891"
              />
            </label>
          </form>

          <div className="flex-1 lg:max-w-lg p-12 bg-white lg:self-start rounded-xl ">
            <p className="text-18">Summary</p>
            <div>
              {cart.map((product) => (
                <div className="flex gap-4 my-4" key={product.slug}>
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={`/assets/cart/image-${product.slug}.jpg`}
                    alt=""
                  />
                  <div className="">
                    <p className="font-bolder text-lg">{product.short}</p>
                    <p className="font-bolder opacity-50">$ {product.price}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="font-bolder opacity-50 text-lg">
                      x{product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <p className="font-bold opacity-50 uppercase">total</p>
              <p className="font-bolder text-lg">$ {formattedTotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold opacity-50 uppercase">shipping</p>
              <p className="font-bolder text-lg">$ {shipping}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold opacity-50 uppercase">vat (included)</p>
              <p className="font-bolder text-lg">$ {formattedVat}</p>
            </div>
            <div className="my-4 flex justify-between">
              <p className="font-bold opacity-50 uppercase">Grand total</p>
              <p className="font-bolder text-lg text-custom-orange-d8">
                $ {formattedGrandTotal}
              </p>
            </div>
            <div className="w-full flex justify-center ">
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-custom-orange-d8 text-13 py-3 mt-2 w-full text-white uppercase"
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

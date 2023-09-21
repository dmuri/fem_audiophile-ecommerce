import "./checkoutform.css";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default React.forwardRef(function CheckoutForm({ onSubmit }, ref) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const paymentMethod = watch("payment");
  return (
    <>
      <form
        ref={ref}
        className="bg-white rounded-2xl p-12 flex-1 md:min-w-[490px] grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p className="sm:col-span-2 text-32 ">Checkout</p>
        <p className="sm:col-span-2 text-13 text-custom-orange-d8 mt-8">
          Billing details
        </p>
        <div>
          <label>
            <div className="flex justify-between">
              <p>Name</p>
            </div>
            <input
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
            <p>{errors.name?.message}</p>
          </label>
        </div>
        <label>
          <div className="flex justify-between">Email Address</div>
          <input
            {...register("email")}
            type="email"
            placeholder="alexei@mail.com"
          />
        </label>
        <label>
          Phone Number
          <input {...register("phone")} placeholder="+47 443 98 836" />
        </label>
        <p className="mt-8 sm:col-span-2 text-13 text-custom-orange-d8">
          Shipping info
        </p>
        <label className="sm:col-span-2">
          Address
          <input {...register("address")} placeholder="Refstadsvingen 17" />
        </label>
        <label>
          Zip Code
          <input {...register("zip")} placeholder="0584" />
        </label>
        <label>
          City
          <input {...register("city")} placeholder="Oslo" />
        </label>
        <label>
          County
          <input {...register("county")} placeholder="Norway" />
        </label>
        <p className="mt-8 sm:col-span-2 text-13 text-custom-orange-d8">
          Payment Details
        </p>
        <label>Payment Method</label>
        <label
          className="p-[1rem] border-[1px] border-[#CFCFCF]  rounded-lg sm:col-start-2"
          htmlFor="cash"
        >
          <input
            {...register("payment")}
            className="mx-2"
            type="radio"
            value="cash"
            id="cash"
          />
          Cash on Deliver
        </label>
        <label
          className="p-[1rem] border-[1px] border-[#CFCFCF] focus:border-orange-400 rounded-lg sm:col-start-2"
          htmlFor="emoney"
        >
          <input
            {...register("payment")}
            className="mx-2"
            type="radio"
            value="emoney"
            id="emoney"
          />
          e-Money
        </label>
        <label
          htmlFor="emoney-number"
          className={
            paymentMethod === "emoney" ? " " : " hidden lg:block lg:invisible"
          }
          // className="invisible"
        >
          e-Money Number
          <input
            {...register("emoney-number")}
            type="number"
            id="emoney-number"
            placeholder="238521993"
            className="block mt-1 lg:mb-12"
          />
        </label>
        <label
          htmlFor="emoney-pin"
          className={
            paymentMethod === "emoney" ? " " : "hidden lg:block lg:invisible"
          }
        >
          e-Money Pin
          <input
            {...register("emoney-pin")}
            type="password"
            id="emoney-pin"
            placeholder="6891"
            className="block mt-1 lg:mb-12"
          />
        </label>
      </form>
    </>
  );
});

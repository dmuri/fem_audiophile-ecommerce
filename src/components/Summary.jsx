import useStore from "../store/index.js";
import { useFormContext } from "react-hook-form";
import React from "react";

const Summary = React.forwardRef(({ formRef }, ref) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const cart = useStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const vat = total * 0.2;
  const formattedTotal = total.toLocaleString();
  const formattedVat = Math.floor(vat).toLocaleString();
  const shipping = 50;
  const formattedGrandTotal = Math.round(shipping + total).toLocaleString();

  const submitForm = () => {
    console.log("hello");
    console.log(errors);
    if (formRef && formRef.current) {
      formRef.current.requestSubmit(); // This will submit the form from CheckoutForm
    }
  };

  return (
    <>
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
        <button onClick={submitForm} className="uppercase">
          Continue & pay
        </button>
      </div>
    </>
  );
});

export default Summary;

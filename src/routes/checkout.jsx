import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import Summary from "../components/Summary.jsx";
import { useForm, FormProvider } from "react-hook-form";
import GoBackButton from "../components/GoBackButton.jsx";
import { useRef } from "react";

const Checkout = () => {
  const methods = useForm();
  const formRef = useRef(null);

  return (
    <>
      <Navbar />
      <main className="bg-gray-200 sm:px-8 lg:px-20 xl:px-44">
        <GoBackButton />
        <div className="flex flex-col justify-around mb-12 lg:mb-28 gap-12 lg:flex-row ">
          <FormProvider {...methods}>
            <CheckoutForm ref={formRef} />
            <Summary ref={formRef} />
          </FormProvider>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;

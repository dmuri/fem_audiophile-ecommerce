import useStore from "../store/index.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeProductFromCart = useStore(
    (state) => state.removeProductFromCart,
  );
  const clearCart = useStore((state) => state.clearCart);
  const incrementQuantity = useStore((state) => state.incrementProductQuantity);
  const decrementQuantity = useStore((state) => state.decrementProductQuantity);

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log("Cart: ", cart);
  // }, [cart]);
  //
  return (
    <div className="fixed right-0 bg-amber-400">
      <h2 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        CART
      </h2>
      {isOpen && ( // Render the content below only if isOpen is true
        <>
          {cart.map((product) => (
            <div key={product.slug}>
              {product.slug} - {product.price} - {product.quantity}
              <br />
              <button
                onClick={() => incrementQuantity(product.slug)}
                className="p-1"
              >
                +
              </button>
              <button
                onClick={() => decrementQuantity(product.slug)}
                className="p-1"
              >
                -
              </button>
              <button onClick={() => removeProductFromCart(product.slug)}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
          <br />
          <Link to="/checkout">CHECKOUT</Link>
        </>
      )}
    </div>
  );
};

export default Cart;

// store.js
import { create } from "zustand";

const initialState = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const useStore = create((set) => ({
  cart: initialState(),

  setCart: (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
    set({ cart });
  },
  addProductToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === product.slug
      );
      let updatedCart;

      if (existingProductIndex === -1) {
        updatedCart = [
          ...state.cart,
          {
            slug: product.slug,
            short: product.short,
            price: product.price,
            quantity: product.quantity,
          },
        ];
      } else {
        updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += product.quantity;
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updatedCart to localStorage
      return { cart: updatedCart }; // Return the updated cart state
    }),

  removeProductFromCart: (productSlug) =>
    set((state) => {
      const newCart = state.cart.filter(
        (product) => product.slug !== productSlug
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),
  clearCart: () => {
    localStorage.removeItem("cart"); // Clear from localStorage
    set({ cart: [] });
  },

  incrementProductQuantity: (productSlug) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === productSlug
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }

      return state;
    }),

  decrementProductQuantity: (productSlug) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === productSlug
      );

      if (
        existingProductIndex !== -1 &&
        state.cart[existingProductIndex].quantity > 0
      ) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity -= 1;

        if (updatedCart[existingProductIndex].quantity === 0) {
          updatedCart.splice(existingProductIndex, 1);
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }

      return state;
    }),
}));

export default useStore;

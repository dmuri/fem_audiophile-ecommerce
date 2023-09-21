// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addProductToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === product.slug,
      );

      if (existingProductIndex === -1) {
        console.log(product);
        return {
          cart: [
            ...state.cart,
            {
              slug: product.slug,
              short: product.short,
              price: product.price,
              quantity: product.quantity,
            },
          ],
        };
      }
      const updatedCart = [...state.cart];
      updatedCart[existingProductIndex].quantity += product.quantity;

      return { cart: updatedCart };
    }),
  removeProductFromCart: (productSlug) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.slug !== productSlug),
    })),
  clearCart: () => set({ cart: [] }),

  incrementProductQuantity: (productSlug) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === productSlug,
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { cart: updatedCart };
      }

      return state; // Return unchanged state if the product isn't found
    }),

  decrementProductQuantity: (productSlug) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.slug === productSlug,
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

        return { cart: updatedCart };
      }

      return state;
    }),
}));

export default useStore;

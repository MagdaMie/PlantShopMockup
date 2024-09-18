import { create } from "zustand";
import { Product } from "../types/types";


type CartState = {
  cartProducts: Product[];
  modalMessage: string | null;
  addPlant: (product: Product) => void;
  removePlant: (product: Product) => void;
  decrementCounter: (product: Product) => void;
  closeModal: () => void;
};
const useCartStore = create<CartState>((set) => ({
  cartProducts: [],
  modalMessage: null,
  addPlant: (product) =>
    set((prevState) => {
      if (prevState.cartProducts.some((plant) => plant.id === product.id)) {
        const newCartProducts = prevState.cartProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, counter: cartProduct.counter + 1 };
          } else {
            return cartProduct;
          }
        });
        return { cartProducts: newCartProducts,
          modalMessage: `Added ${product.name} to the cart`
         };
      } else {
        return { cartProducts: [...prevState.cartProducts, product],
          modalMessage:`Added ${product.name} to the cart`
         };
      }
    }),
  removePlant: (product) =>
    set((prevState) => {
      return {
        cartProducts: prevState.cartProducts.filter(
          (cartProduct) => cartProduct.id !== product.id
        ),
      };
    }),
  decrementCounter: (product) =>
    set((prevState) => {
      if (product.counter > 1) {
        const newCartProducts = prevState.cartProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, counter: cartProduct.counter - 1 };
          } else {
            return cartProduct;
          }
        });
        return { cartProducts: newCartProducts };
      } else {
        return prevState;
      }
    }),
    closeModal: () => set({modalMessage: null})
}));

export default useCartStore;

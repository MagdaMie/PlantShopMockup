import { create } from "zustand";
import { Product } from "../types/types";
import useNotificationStore from "./notoficationStore";

type CartState = {
  cartProducts: Product[];

  addPlant: (product: Product) => void;
  removePlant: (product: Product) => void;
  decrementCounter: (product: Product) => void;
};
const useCartStore = create<CartState>((set) => ({
  cartProducts: [],

  addPlant: (product) =>
    set((prevState) => {
      const { setNotification } = useNotificationStore.getState();

      const newCartProducts = prevState.cartProducts.some(
        (plant) => plant.id === product.id
      )
        ? prevState.cartProducts.map((cartProduct) => {
            if (cartProduct.id === product.id) {
              
              return { ...cartProduct, counter: cartProduct.counter + 1 };
            }
            return cartProduct;
          })
        : [...prevState.cartProducts, product];

      setNotification(`${product.name} has been added to the cart!`);
      return { cartProducts: newCartProducts };
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
}));

export default useCartStore;

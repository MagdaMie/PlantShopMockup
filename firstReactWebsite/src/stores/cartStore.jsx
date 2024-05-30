import { create } from "zustand";

const useCartStore = create((set) => ({
    cartProducts: [],
    addPlant: (newPlant) =>
      set((prevState) => {
        if (prevState.cartProducts.some((plant) => plant.id === newPlant.id)) {
          const newCartProducts = prevState.cartProducts.map((cartProduct) => {
            if (cartProduct.id === newPlant.id) {
              return { ...cartProduct, counter: cartProduct.counter + 1 };
            } else {
              return cartProduct;
            }
          });
          return { cartProducts: newCartProducts };
        } else {
          return { cartProducts: [...prevState.cartProducts, newPlant] };
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
  }));

  export default useCartStore
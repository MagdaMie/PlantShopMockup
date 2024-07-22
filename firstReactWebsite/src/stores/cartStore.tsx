import { create } from "zustand";
export type Plant = {
  id: number;
  name: string;
  counter: number;
  price: number;
  img: string;
};

type CartState = {
  cartProducts: Plant[];
  addPlant: (product: Plant) => void;
  removePlant: (product: Plant) => void;
  decrementCounter: (product: Plant) => void;
};
const useCartStore = create<CartState>((set) => ({
  cartProducts: [],
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
        return { cartProducts: newCartProducts };
      } else {
        return { cartProducts: [...prevState.cartProducts, product] };
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

export default useCartStore;

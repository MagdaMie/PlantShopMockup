import { Product } from "../types/types";

type ShoppingCartElementProps = {
  cartProduct: Product;
  removePlant: (cartProduct: Product) => void;
  addPlant: (cartProduct: Product) => void;
  decrementCounter: (cartProduct: Product) => void;
  id: number;
};

const ShoppingCartElement = ({
  cartProduct,
  removePlant,
  addPlant,
  decrementCounter,
}: ShoppingCartElementProps) => {
  return (
    <div className="shopping-cart-element">
      <div className="product">
        <img src={cartProduct.img} alt="" />
        <p>{cartProduct.name}</p>
      </div>
      <div className="quantity">
        <p onClick={() => decrementCounter(cartProduct)}>-</p>
        <p>{cartProduct.counter}</p>
        <p onClick={() => addPlant(cartProduct)}>+</p>
      </div>
      <div className="price">
        <p>${cartProduct.price * cartProduct.counter}</p>
      </div>
      <div className="remove">
        <p onClick={() => removePlant(cartProduct)}>x</p>
      </div>
    </div>
  );
};

export default ShoppingCartElement;

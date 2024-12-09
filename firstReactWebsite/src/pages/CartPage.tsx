import Button from "../components/Button";
import ShoppingCartElement from "../components/ShopingCratElement";
import PriceCounter from "../components/PriceCounter";
import { Link } from "react-router-dom";
import { Product } from "../types/types";

type CartPageProps = {
  cartProducts: Product[];
  totalPrice: number;
  shippingCost: number;
  removePlant: (cartProduct: Product) => void;
  addPlant: (cartProduct: Product) => void;
  decrementCounter: (cartProduct: Product) => void;
};

const CartPage = ({
  cartProducts,
  totalPrice,
  shippingCost,
  removePlant,
  addPlant,
  decrementCounter,
}: CartPageProps) => {
  return (
    <div className="cart-page">
      <div className="cart-page-content">
        <div className="title">
          <h3>Shopping Cart</h3>
          {cartProducts.length === 0 && <p>your cart is empty</p>}
        </div>
        {cartProducts.map((cartProduct) => {
          return (
            <ShoppingCartElement
              cartProduct={cartProduct}
              key={cartProduct.id}
              id={cartProduct.id}
              removePlant={removePlant}
              addPlant={addPlant}
              decrementCounter={decrementCounter}
            />
          );
        })}
        <PriceCounter
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          shippingCost={shippingCost}
        />
        <Link to={"/shop"}>
          <Button content={"Continue shopping"} />
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

import Button from "../components/Button";
import ShoppingCartElement from "../components/ShopingCratElement";
import PriceCounter from "../components/PriceCounter";
import { Link } from "react-router-dom";
import { Plant } from "../stores/cartStore";

type CartPageProps = {
  cartProducts: Plant[];
  totalPrice: number;
  shippingCost: number;
  removePlant: (cartProduct: Plant) => void;
  addPlant: (cartProduct: Plant) => void;
  decrementCounter: (cartProduct: Plant) => void;
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
          <Button content={"continue shopping"} />
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

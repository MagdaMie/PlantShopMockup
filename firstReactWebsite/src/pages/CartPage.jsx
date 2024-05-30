import ButtonBetter from "../components/ButtonBetter";
import ShoppingCartElement from "../components/ShopingCratElement";
import PriceCounter from "../components/PriceCounter";
import { Link } from "react-router-dom";

const CartPage = ({
  cartProducts,
  totalPrice,
  shippingCost,
  removePlant,
  addPlant,
  decrementCounter,
}) => {
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
              is={cartProduct.id}
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
          <ButtonBetter content={"continue shopping"} />
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

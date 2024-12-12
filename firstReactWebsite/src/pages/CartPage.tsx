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
    <div className="w-5/6 mx-auto">
      <div className="mx-auto mb-16">
        <h3 className="text-center text-5xl font-crimson">Your Cart</h3>
        {cartProducts.length === 0 && (
          <div>
            <p>your cart is empty</p>{" "}
            <Link to={"/shop"}>
              <Button content={"Continue shopping"} />
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className=" flex w-[60%] flex-col gap-8 ">
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
        </div>

        <div className="">
          <PriceCounter
            cartProducts={cartProducts}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

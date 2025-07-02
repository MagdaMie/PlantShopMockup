import Button from "../components/Button";
import ShoppingCartElement from "../components/ShopingCratElement";
import PriceCounter from "../components/PriceCounter";
import { Link } from "react-router-dom";
import { Product } from "../types/types";
import PageTitle from "../components/PageTitle";

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
    <div className="mx-auto min-h-[60vh] w-5/6">
      <div>
        <PageTitle title="Your Cart" />
        {cartProducts.length === 0 && (
          <div className="m-6 flex flex-col items-center">
            <p className="mb-3 text-center text-lg">your cart is empty...</p>
            <Link to={"/shop"}>
              <Button content={"Continue shopping"} />
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-between gap-20 md:justify-center lg:flex-row lg:items-start">
        <div className="flex w-[60%] flex-col items-center gap-14 md:gap-8">
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

        <div>
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

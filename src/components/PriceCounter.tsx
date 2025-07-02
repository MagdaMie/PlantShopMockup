import Button from "./Button";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

type PriceCounterProps = {
  cartProducts: Product[];
  totalPrice: number;
  shippingCost: number;
};

const PriceCounter = ({
  cartProducts,
  totalPrice,
  shippingCost,
}: PriceCounterProps) => {
  const products = cartProducts;

  return (
    totalPrice !== 0 && (
      <div>
        <div className="h-[390px] w-[330px] rounded-lg bg-customGreen-dark bg-opacity-40 p-6">
          {/* summary */}
          <h3 className="pb-4 text-3xl">Order summary</h3>
          <div className="flex flex-col gap-4 text-lg">
            <div className="mb-2 text-sm">
              {/* subtotal */}
              <div className="mb-2 flex justify-between">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              {/* shipping */}
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>${shippingCost}</p>
              </div>
            </div>
          </div>

          {/* total */}
          <div className="flex justify-between border-t-2 border-t-darkGray pt-4 font-bold uppercase">
            <p>Total</p>
            <p>${totalPrice + shippingCost}</p>
          </div>
          <div className="mt-3 flex flex-col items-center justify-around gap-4">
            <Button content={"Checkout"} />
            <Link to={"/shop"}>
              <Button content={"Continue shopping"} />
            </Link>
          </div>
        </div>
        {/* buttons */}
      </div>
    )
  );
};

export default PriceCounter;

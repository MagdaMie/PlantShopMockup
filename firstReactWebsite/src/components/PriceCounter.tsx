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
        <div className="h-[390px] w-[330px] p-6 bg-customGreen-dark bg-opacity-40 rounded-lg">
          {/* summary */}
          <h3 className="text-3xl pb-4">Order summary</h3>
          <div className="flex flex-col gap-4 text-lg">
            <div className="text-sm mb-2">
              {/* subtotal */}
              <div className="flex justify-between mb-2 ">
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
          <div className="pt-4  flex justify-between font-bold uppercase border-t-2 border-t-darkGray">
            <p>Total</p>
            <p>${totalPrice + shippingCost}</p>
          </div>
          <div className="mt-3 flex flex-col gap-4 justify-around items-center">
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

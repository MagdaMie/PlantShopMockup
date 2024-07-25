import Button from "./Button";
import useSWRMutation from "swr/mutation";
import { Product } from "../types/types";

type PriceCounterProps ={
  cartProducts: Product[];
   totalPrice:number;
    shippingCost:number;
}

const PriceCounter = ({ cartProducts, totalPrice, shippingCost }: PriceCounterProps) => {
  const products = cartProducts;

  const fetchPayment = async (url: string) => {
    return fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(products),
    }).then((res) => res.json());
  };
  const { trigger, isMutating } = useSWRMutation(
    `http://localhost:3000/checkout`,
    fetchPayment
  );

  const handlePayment = async () => {
    try {
      const data = await trigger();
      console.log(data);
      if (data) {
        window.location.href = data;
      } else {
        console.error("Failed to get the checkout URL");
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  return (
    totalPrice !== 0 && (
      <div className="price-counter">
        <div className="subtotal">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <div className="shipping">
          <p>Shipping</p>
          <p>${shippingCost}</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>${totalPrice + shippingCost}</p>
        </div>
        <Button
          content={"Checkout"}
          onClick={handlePayment}
          disable={isMutating}
        />
      </div>
    )
  );
};

export default PriceCounter;

import { Product } from "../types/types";

type ShoppingCartElementProps = {
  cartProduct: Product;
  removePlant: (cartProduct: Product) => void;
  addPlant: (cartProduct: Product, showNotification?: boolean) => void;
  decrementCounter: (cartProduct: Product) => void;
  id: number;
};

const ShoppingCartElement = ({
  cartProduct,
  removePlant,
  addPlant,
  decrementCounter,
}: ShoppingCartElementProps) => {
  const showNotification = false;
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start md:gap-10">
      {/* plant */}
      <div className="flex w-[300px] items-center justify-around">
        <img
          src={cartProduct.img}
          alt="plant's picure"
          className="mr-6 h-[140px] w-[100px]"
        />
        <p className="md:w-[130px]">{cartProduct.name}</p>
      </div>
      <div className="flex w-[300px] justify-center gap-8 md:gap-12">
        {/* quantity +/- */}
        <div className="flex h-[40px] w-[100px] items-center justify-center rounded-xl bg-customGreen-dark bg-opacity-40">
          <p
            onClick={() => decrementCounter(cartProduct)}
            className="cursor-pointer px-3"
          >
            -
          </p>
          <p>{cartProduct.counter}</p>
          <p
            onClick={() => addPlant(cartProduct, showNotification)}
            className="cursor-pointer px-3"
          >
            +
          </p>
        </div>
        {/* price */}
        <div className="flex items-center">
          <p>${cartProduct.price * cartProduct.counter}</p>
        </div>
        {/* remove */}
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-customGreen-dark bg-opacity-40 font-oxygen">
          <p
            onClick={() => removePlant(cartProduct)}
            className="cursor-pointer px-3 font-thin"
          >
            x
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartElement;

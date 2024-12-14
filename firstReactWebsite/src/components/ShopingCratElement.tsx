import { Product } from "../types/types";

type ShoppingCartElementProps = {
  cartProduct: Product;
  removePlant: (cartProduct: Product) => void;
  addPlant: (cartProduct: Product, showNotification?:boolean) => void;
  decrementCounter: (cartProduct: Product) => void;
  id: number;
};

const ShoppingCartElement = ({
  cartProduct,
  removePlant,
  addPlant,
  decrementCounter,
}: ShoppingCartElementProps) => {
  const showNotification = false
  return (
    <div className="flex justify-between items-center">
      {/* plant */}
      <div className="flex items-center mr-6 ">
        <img src={cartProduct.cartImg} alt="plant's picure" className="h-[140px] w-[100px] mr-6" />
        <p className="w-[130px]">{cartProduct.name}</p>
      </div>
      <div className="flex gap-12 w-[400px]">
         {/* quantity +/- */}
      <div className=" flex justify-center items-center rounded-xl w-[100px] h-[40px] bg-customGreen-dark bg-opacity-40">
        <p onClick={() => decrementCounter(cartProduct)} className="cursor-pointer px-3 ">-</p>
        <p>{cartProduct.counter}</p>
        <p onClick={() => addPlant(cartProduct, showNotification)} className="cursor-pointer px-3 ">+</p>
      </div>
      {/* price */}
      <div className="flex items-center">
        <p>${cartProduct.price * cartProduct.counter}</p>
      </div>
      {/* remove */}
      <div className="flex justify-center items-center h-[40px] w-[40px] rounded-2xl  font-oxygen  bg-customGreen-dark bg-opacity-40">
        <p onClick={() => removePlant(cartProduct)} className="px-3 cursor-pointer font-thin ">x</p>
      </div>
      </div>
     
    </div>
  );
};

export default ShoppingCartElement;

import { Product } from "../types/types";

type ProductDisplayProps = {
  product: Product;
};
const ProductDisplay = ({ product }: ProductDisplayProps) => {
  return (
    <div className="bg-customGreen-dark bg-opacity-40 relative w-[20%]">
      <div className="w-[300px] h-[85vh] absolute left-[60%] flex justify-center items-center">
        <img
          src={product.cartImg}
          alt=""
          className="max-h-full max-w-[350px]"
        />
      </div>
    </div>
  );
};

export default ProductDisplay;

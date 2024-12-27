import { Product } from "../types/types";

type ProductDisplayProps = {
  product: Product;
};
const ProductDisplay = ({ product }: ProductDisplayProps) => {
  return (
    <div className="bg-customGreen-dark bg-opacity-40 relative flex items-center justify-center lg:w-[20%]">
      <div className="flex justify-center items-center p-10 product-display-lg">
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

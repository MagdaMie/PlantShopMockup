import { Product } from "../types/types";
import ResponsiveImg from "./ResponsiveImg";

type ProductDisplayProps = {
  product: Product;
};
const ProductDisplay = ({ product }: ProductDisplayProps) => {
  return (
    <div className="relative flex items-center justify-center bg-customGreen-dark bg-opacity-40 lg:w-[20%]">
      <div className="product-display-lg flex items-center justify-center p-10">
        <ResponsiveImg
          src={product.img}
          key={product.img}
          alt={"instagram picure"}
          sizes={[350, 250]}
          formats={["webp", "jpg"]}
          className="max-h-full max-w-[350px]"
        />
      </div>
    </div>
  );
};

export default ProductDisplay;

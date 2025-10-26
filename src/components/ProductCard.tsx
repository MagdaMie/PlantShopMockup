import { Link } from "react-router-dom";
import Button from "./Button";
import { Product } from "../types/types";
import ResponsiveImg from "./ResponsiveImg";

type ProductCardProps = {
  product: Product;
  addPlant: (product: Product, showNotification?: boolean) => void;
};

const ProductCard = ({ product, addPlant }: ProductCardProps) => {
  const buttonContent = "Add to the cart";

  return (
    <div className="m-5">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-[350px] w-[250px]">
          <ResponsiveImg
            src={product.img}
            key={product.img}
            alt={"product picure"}
            sizes={[375, 350]}
            formats={["webp", "jpg"]}
            className="absolute bottom-[-10%] left-[-15%] transform hover:scale-110"
          />
        </div>
      </Link>
      <div className="rounded-xl border-2 border-solid border-customGreen-dark px-5 pb-5 pt-12">
        <div className="flex flex-wrap items-center justify-around">
          <p className="font-bold">{product.name}</p>
          <p className="text-xl font-bold">${product.price}</p>
        </div>
        <div className="mx-0 my-5">
          <Button content={buttonContent} onClick={() => addPlant(product)} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { Link } from "react-router-dom";
import Button from "./Button";
import { Product } from "../types/types";

type ProductCardProps = {
  product: Product;
  addPlant: (product: Product, showNotification?: boolean) => void;
};

const ProductCard = ({ product, addPlant }: ProductCardProps) => {
  const buttonContent = "Add to the cart";

  return (
    <div className="m-5">
      <Link to={`/product/${product.id}`}>
        <div className="w-[250px] h-[350px] relative">
          <img
            className="absolute bottom-[-10%] left-[-15%] transform hover:scale-110"
            src={product.img}
            alt="plant's photo"
          />
        </div>
      </Link>
      <div className="border-solid border-2 border-customGreen-dark rounded-xl pt-12 pb-5 px-5">
        <div className="flex flex-wrap justify-around items-center">
          <p className="font-bold">{product.name}</p>
          <p className="font-bold text-xl">${product.price}</p>
        </div>
        <div className="my-5 mx-0">
          <Button content={buttonContent} onClick={() => addPlant(product)} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

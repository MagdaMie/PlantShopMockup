import { Link } from "react-router-dom";
import Button from "./Button";
import { Product } from "../types/types";

type ProductCardProps = {
  product: Product;
   addPlant:(product: Product) => void;
}

const ProductCard = ({ product, addPlant }: ProductCardProps) => {
  const buttonContent = "Add to the cart";

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="img-wrap">
          <img src={product.img} alt="" />
        </div>
      </Link>
      <div className="product-details">
        <div className="wrap">
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
        <div className="button-wrap">
          <Button content={buttonContent} onClick={() => addPlant(product)} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import Button from "../components/Button.js";
import { useParams } from "react-router-dom";
import products from "../data/products.js";
import { Product } from "../types/types";
import Notification from "../components/Notification.js";
import ProductDescription from "./ProductDescription.js";

type ProductPageProps = {
  addPlant: (product: Product) => void;
};

type Params = {
  id: string;
};

const ProductPage = ({ addPlant }: ProductPageProps) => {
  const { id } = useParams<Params>();
  const productId = id ? parseInt(id) : NaN;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Loading..</div>;
  }
  return (
    <div className="product-page">
      <div className="product-display">
        <img src={product.img} alt="" />
      </div>
      <ProductDescription
      product={product}
      addPlant={addPlant}/>
      <Notification />
    </div>
  );
};

export default ProductPage;

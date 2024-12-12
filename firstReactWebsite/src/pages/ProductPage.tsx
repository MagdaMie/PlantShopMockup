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
    <div className="h-[85vh] flex">
      <div className="bg-customGreen-dark bg-opacity-40 relative w-[20%]">
        <div className="w-[300px] h-[85vh] absolute left-[60%] flex justify-center items-center">
          <img src={product.cartImg} alt="" className="max-h-full max-w-[350px]"/>
        </div>
      </div>
      <ProductDescription product={product} addPlant={addPlant} />
      <Notification />
    </div>
  );
};

export default ProductPage;

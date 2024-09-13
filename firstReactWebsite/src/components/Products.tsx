import ProductCard from "./ProductCard";
import { Product } from "../types/types";

type ProductsProps = {
  products: Product[];
  addPlant: (product: Product) => void;
};

const Products = ({ products, addPlant }: ProductsProps) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard product={product} key={product.id} addPlant={addPlant} />
        );
      })}
    </div>
  );
};

export default Products;

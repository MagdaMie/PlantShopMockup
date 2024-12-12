import Button from "../components/Button";
import ProductCare from "../components/ProductCare";
import { Product } from "../types/types";

type ProductDescriptionProps = {
  product: Product;
  addPlant: (product: Product) => void;
};

const ProductDescription = ({ product, addPlant }: ProductDescriptionProps) => {
  return (
    <div className="product-description">
      <div className="wrap">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consectetur eaque dolores, quisquam inventore debitis fugiat! Libero
          natus dolorum fugit, odio ipsum harum aperiam, dicta et facilis omnis
          sunt deserunt, assumenda cumque ad sint voluptatem eius excepturi quis
          labore ipsam repellendus perferendis sed delectus! Nisi quibusdam odit
          nostrum nam sapiente velit? Blanditiis consequuntur earum perspiciatis
          illo aut{" "}
        </p>

        <ProductCare />
        <div>
          <Button
            content={"Add to the cart"}
            onClick={() => addPlant(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

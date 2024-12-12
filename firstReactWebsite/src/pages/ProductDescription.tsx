import Button from "../components/Button";
import ProductCare from "../components/ProductCare";
import { Product } from "../types/types";

type ProductDescriptionProps = {
  product: Product;
  addPlant: (product: Product) => void;
};

const ProductDescription = ({ product, addPlant }: ProductDescriptionProps) => {
  return (
    <div className="bg-customGreen-light flex  flex-col justify-center items-center">
      <div className="w-5/6 px-4">
        <h3 className="my-3 text-4xl">{product.name}</h3>
        <p className="text-xl font-bold text-customGreen-dark">${product.price}</p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consectetur eaque dolores, quisquam inventore debitis fugiat! Libero
          natus dolorum fugit, odio ipsum harum aperiam, dicta et facilis omnis
          sunt deserunt, assumenda cumque ad sint voluptatem eius excepturi quis
          labore ipsam repellendus perferendis sed delectus! Nisi quibusdam odit
          nostrum nam sapiente velit? Blanditiis consequuntur earum perspiciatis
          illo aut
        </p>
        <ProductCare />
      </div>

      <div className="mt-8 ">
        <Button content={"Add to the cart"} onClick={() => addPlant(product)} />
      </div>
    </div>
  );
};

export default ProductDescription;

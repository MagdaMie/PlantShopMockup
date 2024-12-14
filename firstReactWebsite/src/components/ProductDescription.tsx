import Button from "./Button";
import ProductCare from "./ProductCare";
import { Product } from "../types/types";

type ProductDescriptionProps = {
  product: Product;
  addPlant: (product: Product) => void;
};

const ProductDescription = ({ product, addPlant }: ProductDescriptionProps) => {
  return (
    <div className=" flex  flex-col justify-center items-center w-[80%]">
      <div className="w-4/6 px-6 mx-auto z-10">
        <div className="my-4">
          <h3 className="text-3xl">{product.name}</h3>
          <p className="text-xl font-bold">${product.price}</p>
        </div>

        <div className=" ">
          <Button
            content={"Add to the cart"}
            onClick={() => addPlant(product)}
          />
        </div>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consectetur eaque dolores, quisquam inventore debitis fugiat! Libero
          natus dolorum fugit, odio ipsum harum aperiam, dicta et facilis omnis
          sunt deserunt, assumenda cumque ad sint voluptatem eius excepturi quis
          labore ipsam repellendus perferendis sed delectus! Nisi quibusdam odit
          nostrum nam sapiente velit? Blanditiis consequuntur earum perspiciatis
          illo aut
        </p>
        <div>
          <ProductCare />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

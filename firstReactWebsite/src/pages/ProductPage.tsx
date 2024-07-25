import Button from "../components/Button.js";
import { useParams } from "react-router-dom";
import products from "../data/products.js";
import { Product } from "../types/types";

type ProductPageProps = {
  addPlant: (product: Product) => void;
}

type Params = {
  id: string;
};

const ProductPage = ({ addPlant }: ProductPageProps) => {
  const { id } = useParams<Params>();
  // i dont understand why this works here 
  const productId =  id ? parseInt(id) : NaN;;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Loading..</div>;
  }
  return (
    <div className="product-page">
      <div className="product-display">
        <img src={product.img} alt="" />
      </div>
      <div className="product-description">
        <div className="wrap">
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            consectetur eaque dolores, quisquam inventore debitis fugiat! Libero
            natus dolorum fugit, odio ipsum harum aperiam, dicta et facilis
            omnis sunt deserunt, assumenda cumque ad sint voluptatem eius
            excepturi quis labore ipsam repellendus perferendis sed delectus!
            Nisi quibusdam odit nostrum nam sapiente velit? Blanditiis
            consequuntur earum perspiciatis illo aut{" "}
          </p>

          <div className="product-care">
            <ul>
              <li>
                <img src="/icon5.png" alt="" />
                <p>Lorem, ipsum</p>
              </li>
              <li>
                <img src="/icon5.png" alt="" />
                <p>Lorem, ipsum</p>
              </li>
              <li>
                <img src="/icon5.png" alt="" />
                <p>Lorem, ipsum</p>
              </li>
              <li>
                <img src="/icon5.png" alt="" />
                <p>Lorem, ipsum</p>
              </li>
            </ul>
          </div>
          <div>
            <Button
              content={"Add to the cart"}
              onClick={() => addPlant(product)}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

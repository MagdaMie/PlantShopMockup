import { Link } from "react-router-dom"
import ButtonBetter from "./ButtonBetter"

const ProductCard = ({ product, addPlant}) => {
    const buttonContent = 'Add to the cart'
    return(
        <div className="product-card">
            <Link to={'/product'}>
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
                <ButtonBetter 
                content={buttonContent}
                onClick={() => addPlant(product)}/> 
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard
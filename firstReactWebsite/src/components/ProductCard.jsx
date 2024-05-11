import ButtonBetter from "./ButtonBetter"

const ProductCard = ({ name, price, img}) => {
    const buttonContent = 'Add to the cart'
    return(
        <div className="product-card">
            <div className="img-wrap">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <div className="wrap">
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
                <div className="button-wrap">
                <ButtonBetter 
                content={buttonContent}/> 
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard
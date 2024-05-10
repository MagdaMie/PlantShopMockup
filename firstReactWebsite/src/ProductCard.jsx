

const ProductCard = ({ name, price, img}) => {

    return(
        <div className="product-card">
            <div className="img-wrap">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <div className="wrap">
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price}</p>
                </div>
                <button>Add to the cart</button>
            </div>
        </div>
    )
}

export default ProductCard
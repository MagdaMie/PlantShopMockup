

const ShoppingCartElement = ({cartProduct, removePlant}) => {

    return (
        <div className="shopping-cart-element">
            <div className="product">
                <img src={cartProduct.img} alt="" />
                <p>{cartProduct.name}</p>
            </div>
            {/* <div className="quantity">
                <p>-</p>
                <p>3</p>
                <p>+</p>
            </div> */}
            <div className="price">
                <p>${cartProduct.price}</p>
            </div>
            <div className="remove">
                <p onClick={() => removePlant(cartProduct.id)}>x</p>
            </div>
        </div>
    )
}

export default ShoppingCartElement
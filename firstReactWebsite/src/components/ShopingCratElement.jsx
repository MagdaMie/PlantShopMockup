

const ShoppingCartElement = () => {

    return (
        <div className="shopping-cart-element">
            <div className="product">
                <img src="2.png" alt="" />
                <p>plant name</p>
            </div>
            <div className="quantity">
                <p>-</p>
                <p>3</p>
                <p>+</p>
            </div>
            <div className="price">
                <p>$55</p>
            </div>
            <div className="remove">
                <p>x</p>
            </div>
        </div>
    )
}

export default ShoppingCartElement


const PriceCounter = ({cartProducts}) => {
    const totalOfEachProduct = cartProducts.map(cartProduct => cartProduct.counter*cartProduct.price)

    // PRICE UPDATES ONLY WHEN CLICKING ADD TO THE CART, NOT WHEN CLICKING INCLEMENT COUNTER IN THE SHOPPING CART ELEMENTE
    const totalPrice = totalOfEachProduct.reduce((total, price) => total + price, 0)

    const totalProducts = cartProducts.reduce((total, product) => total + product.counter, 0)

    const shippingCost = totalPrice>150 ? 0 : 10 * totalProducts


    return(
        totalPrice !==0 && <div className="price-counter">
            <div className="subtotal">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <div className="shipping">
                <p>Shipping</p>
                <p>${shippingCost}</p>
            </div>
            <div className="total">
                <p>Total</p>
                <p>${totalPrice + shippingCost}</p>
            </div>
        </div>
    )
}

export default PriceCounter
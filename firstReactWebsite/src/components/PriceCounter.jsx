

const PriceCounter = ({cartProducts, totalPrice, shippingCost}) => {
 
    console.log(cartProducts);
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
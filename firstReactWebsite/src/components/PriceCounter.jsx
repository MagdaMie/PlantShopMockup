import { useEffect, useState } from "react";

const PriceCounter = ({cartProducts}) => {
    const [totalPrice, setTotalPrice] = useState()
    const shippingCost = 75


   
    useEffect(() => {
        setTotalPrice(cartProducts.reduce((total, product) => total + product.price, 0))
    },[cartProducts])



    return(
        <div className="price-counter">
            <div className="subtotal">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <div className="shipping">
                <p>Shipping</p>
                {totalPrice>0 && <p>${shippingCost}</p>}
            </div>
            <div className="total">
                <p>Total</p>
                {totalPrice>0 && <p>${totalPrice + shippingCost}</p>}
            </div>
        </div>

    )
}

export default PriceCounter
import { useState } from "react"

const ShoppingCartElement = ({cartProduct, removePlant}) => {
    
    // TO SAMO CO JEST W APP.JSX
    const[counter, setCounter] = useState(cartProduct.counter)
    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter +=1)
    }

    const decrementCounter = () => {
        setCounter(prevCounter => prevCounter -=1)
    }

    return (
        <div className="shopping-cart-element">
            <div className="product">
                <img src={cartProduct.img} alt="" />
                <p>{cartProduct.name}</p>
            </div>
            <div className="quantity">
                <p onClick={decrementCounter}>-</p>
                <p>{counter}</p>
                <p onClick={incrementCounter}>+</p>
            </div>
            <div className="price">
                <p>${cartProduct.price}</p>
            </div>
            <div className="remove">
                <p onClick={() => removePlant(cartProduct)}>x</p>
            </div>
        </div>
    )
}

export default ShoppingCartElement
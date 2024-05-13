import ButtonBetter from "./ButtonBetter"
import ShoppingCartElement from "./ShopingCratElement"
import PriceCounter from "./PriceCounter"
import { Link } from "react-router-dom"

const CartPage = () => {
    return (
        <div className="catr-page">
            <div className="cart-page-content">
                <div className="title">
                  <h3>Shopping Cart</h3>
                  <p>your cart is empty</p>
                </div>
            <ShoppingCartElement />
            <ShoppingCartElement />
            <PriceCounter />
             <Link to={'/shop'}><ButtonBetter content={'< continue shopping'}/></Link>
            </div>
        </div>
    )
}

export default CartPage
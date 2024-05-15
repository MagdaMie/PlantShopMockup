import ButtonBetter from "./ButtonBetter"
import ShoppingCartElement from "./ShopingCratElement"
import PriceCounter from "./PriceCounter"
import { Link } from "react-router-dom"

const CartPage = ({cartProducts, removePlant}) => {
    return (
        <div className="catr-page">
            <div className="cart-page-content">
                <div className="title">
                  <h3>Shopping Cart</h3>
                  {cartProducts.length === 0 && <p>your cart is empty</p>}
                </div>
                {cartProducts.map(cartProduct =>{
                    return <ShoppingCartElement 
                    cartProduct={cartProduct}
                    key={cartProduct.id}
                    is={cartProduct.id}
                    removePlant={removePlant}/>
                }
                )}
            <PriceCounter 
            cartProducts={cartProducts}/>
             <Link to={'/shop'}><ButtonBetter content={'continue shopping'}/></Link>
            </div>
        </div>
    )
}

export default CartPage
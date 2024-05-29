import ButtonBetter from "./ButtonBetter"
import useSWRMutation from 'swr/mutation'

const PriceCounter = ({cartProducts, totalPrice, shippingCost}) => {
    const products = cartProducts

    const fetchPayment = async (url) => {
        return fetch(url, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, method: 'POST', body: JSON.stringify(products)}).then(res => res.json())
    }
    const {trigger, isMutating} = useSWRMutation(`http://localhost:3000/checkout`, fetchPayment)

    const handlePayment = async () => {
        try {
            const data = await trigger();
            console.log(data);
            if (data) {
                window.location.href = data;
            } else {
                console.error('Failed to get the checkout URL');
            }
        } catch (error) {
            console.error('Error during payment process:', error);
        }
    };
 
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
            <ButtonBetter
            content={'Pay'} 
            onClick={handlePayment}
            disable={isMutating}
            />
        </div>
    )
}

export default PriceCounter
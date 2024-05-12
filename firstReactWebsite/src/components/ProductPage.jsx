import ButtonBetter from "./ButtonBetter"

const ProductPage = () => {

    return(
    <div className="product-page">
        <div className="product-display">
                <img src="/9.png" alt="" />
        </div>
        <div className="product-description">
            <div className="wrap">
                <h3>Plant name</h3>
                <p className="price">$45</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur eaque dolores, quisquam inventore debitis fugiat! Libero natus dolorum fugit, odio ipsum harum aperiam, dicta et facilis omnis sunt deserunt, assumenda cumque ad sint voluptatem eius excepturi quis labore ipsam repellendus perferendis sed delectus! Nisi quibusdam odit nostrum nam sapiente velit? Blanditiis consequuntur earum perspiciatis illo aut </p>

                <div className="product-care">
                    <ul>
                        <li>
                            <img src="/icon5.png" alt="" />
                            <p>Lorem, ipsum</p>
                        </li>
                        <li>
                            <img src="/icon5.png" alt="" />
                            <p>Lorem, ipsum</p>
                        </li>
                        <li>
                            <img src="/icon5.png" alt="" />
                            <p>Lorem, ipsum</p>
                        </li>
                        <li>
                            <img src="/icon5.png" alt="" />
                            <p>Lorem, ipsum</p>
                        </li>
                    </ul>
                </div>
                <div>
                <ButtonBetter 
                content={'Add to the cart'}/>
                </div>
                <div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default ProductPage
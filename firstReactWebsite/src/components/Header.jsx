import { Link } from "react-router-dom"

const Header = () => {

    return(
    <div className="header">
        <div className="logo"><img src="/Logo.png" alt="" /></div>
        <div className="navigation">
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/shop"}>SHOP</Link></li>
                <li><Link to={"/contact"}>CONTACT</Link></li>
                <li><Link to={"/FAQ"}>FAQ</Link></li>
                <li>CART</li>
            </ul>
        </div>
   </div>
    )

}

export default Header
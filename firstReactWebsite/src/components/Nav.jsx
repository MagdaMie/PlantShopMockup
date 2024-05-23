import { Link } from "react-router-dom";

const Nav = ({noOfCartProducts, displayNav, displayNavElement}) => {
    return(
        <div className={displayNav}>
        <Link className={displayNavElement} to={"/"}>
          HOME
        </Link>
        <Link className={displayNavElement} to={"/shop"}>
          SHOP
        </Link>
        <Link className={displayNavElement} to={"/contact"}>
          CONTACT
        </Link>
        <Link className={displayNavElement} to={"/FAQ"}>
          FAQ
        </Link>
        <Link className={displayNavElement} to={"/cart"}>
          CART {noOfCartProducts}
        </Link>
      </div>
    )
}

export default Nav
import NavLink from "./NavLink.js";


type NavProps = {
  numberOfCartProducts?: number;
  displayHorizontal: boolean;
}
const Nav = ({ numberOfCartProducts, displayHorizontal }: NavProps) => {
  const navH = "hidden lg:flex lg:m-8";
  const navV = "flex flex-col items-center lg:items-start";

  const navLinkDisplay =
    "displayHorizontal ? my-0 mx-4 : my-1 mx-0";

  return (
    <div className={displayHorizontal ? navH : navV}>
      <NavLink className={navLinkDisplay} to={"/"}>
        HOME
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/shop"}>
        SHOP
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/contact"}>
        CONTACT
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/FAQ"}>
        FAQ
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/cart"}>
        CART {numberOfCartProducts}
      </NavLink>
    </div>
  );
};

export default Nav;

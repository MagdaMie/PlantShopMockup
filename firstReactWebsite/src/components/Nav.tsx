import NavLink from "./NavLink.js";


type NavProps = {
  numberOfCartProducts?: number;
  displayHorizontal: boolean;
}
const Nav = ({ numberOfCartProducts, displayHorizontal }: NavProps) => {
  const navH = "hidden lg:flex lg:m-8";
  const navV = "flex flex-col items-center lg:items-start";

  const navLinkDisplay =
    "displayHorizontal ? my-0 mx-4 : my-1 mx-0 uppercase";

  return (
    <div className={displayHorizontal ? navH : navV}>
      <NavLink className={navLinkDisplay} to={"/"}>
        home
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/shop"}>
        shop
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/contact"}>
        contact
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/FAQ"}>
        faq
      </NavLink>
      <NavLink className={navLinkDisplay} to={"/cart"}>
        cart {numberOfCartProducts}
      </NavLink>
    </div>
  );
};

export default Nav;

import NavLink from "./NavLink.jsx";

const Nav = ({ numberOfCartProducts, displayHorizontal }) => {
  const navH = "flex m-8";
  const navV = "flex flex-col";

  const linkH = "my-0 mx-[1rem]";
  const linkV = "my-[0.25rem] mx-0";

  return (
    <div className={displayHorizontal ? navH : navV}>
      <NavLink className={displayHorizontal ? linkH : linkV} to={"/"}>
        HOME
      </NavLink>
      <NavLink className={displayHorizontal ? linkH : linkV} to={"/shop"}>
        SHOP
      </NavLink>
      <NavLink className={displayHorizontal ? linkH : linkV} to={"/contact"}>
        CONTACT
      </NavLink>
      <NavLink className={displayHorizontal ? linkH : linkV} to={"/FAQ"}>
        FAQ
      </NavLink>
      <NavLink className={displayHorizontal ? linkH : linkV} to={"/cart"}>
        CART {numberOfCartProducts}
      </NavLink>
    </div>
  );
};

export default Nav;

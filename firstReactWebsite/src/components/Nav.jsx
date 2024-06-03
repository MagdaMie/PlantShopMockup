import NavLink from "./NavLink.jsx";

const Nav = ({ numberOfCartProducts, displayHorizontal }) => {
  const navH = "flex m-8";
  const navV = "flex flex-col";

  return (
    <div className={displayHorizontal ? navH : navV}>
      <NavLink displayHorizontal={displayHorizontal} to={"/"}>
        HOME
      </NavLink>
      <NavLink displayHorizontal={displayHorizontal} to={"/shop"}>
        SHOP
      </NavLink>
      <NavLink displayHorizontal={displayHorizontal} to={"/contact"}>
        CONTACT
      </NavLink>
      <NavLink displayHorizontal={displayHorizontal} to={"/FAQ"}>
        FAQ
      </NavLink>
      <NavLink displayHorizontal={displayHorizontal} to={"/cart"}>
        CART {numberOfCartProducts}
      </NavLink>
    </div>
  );
};

export default Nav;

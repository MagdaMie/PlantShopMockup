import NavLink from "./NavLink.js";
import { NAV_LINKS } from "../data/navigation.js";

type NavProps = {
  numberOfCartProducts?: number;
  displayHorizontal: boolean;
};
const Nav = ({ numberOfCartProducts, displayHorizontal }: NavProps) => {
  const navH = "hidden lg:flex lg:m-8";
  const navV = "flex flex-col items-center lg:items-start";

const navLinkDisplay = "displayHorizontal ? my-0 mx-4 : my-1 mx-0 uppercase";

  return (
    <div className={displayHorizontal ? navH : navV}>
      {NAV_LINKS.map((link, index) => (
        <NavLink key={index} className={navLinkDisplay} to={link.path}>
          {link.label}
          {link.isCart &&
            numberOfCartProducts !== undefined &&
            numberOfCartProducts > 0 &&
            ` ${numberOfCartProducts}`}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;

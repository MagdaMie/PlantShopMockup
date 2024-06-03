import { Link } from "react-router-dom";

const NavLink = ({ children, to, displayHorizontal }) => {
  const linkH = "my-0 mx-[1rem]";
  const linkV = "my-[0.25rem] mx-0";

  return (
    <Link className={displayHorizontal ? linkH : linkV} to={to}>
      {children}
    </Link>
  );
};

export default NavLink;

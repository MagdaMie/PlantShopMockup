import { Link } from "react-router-dom";

type NavLinkProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

const NavLink = ({ children, to, className }: NavLinkProps) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default NavLink;

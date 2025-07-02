import { Link } from "react-router-dom";

type NavLinkProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({ children, to, className, onClick }: NavLinkProps) => {
  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;

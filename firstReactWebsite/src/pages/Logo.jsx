import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
      <img src="/Logo.png" alt="logo" className="h-[80px] w-[80px]" />
    </Link>
  );
};

export default Logo;

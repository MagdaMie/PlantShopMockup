import NavLink from "./NavLink";
import LogoImg from "../assets/Logo.png"

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src={LogoImg} alt="logo" className="w-[50px] h-[50px] lg:h-[80px] lg:w-[80px]" />
    </NavLink>
  );
};

export default Logo;

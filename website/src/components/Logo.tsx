import NavLink from "./NavLink";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src="/Logo.png" alt="logo" className="w-[50px] h-[50px] lg:h-[80px] lg:w-[80px]" />
    </NavLink>
  );
};

export default Logo;

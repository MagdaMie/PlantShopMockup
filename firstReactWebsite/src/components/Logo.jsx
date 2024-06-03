import NavLink from "./NavLink";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src="/Logo.png" alt="logo" className="h-[80px] w-[80px]" />
    </NavLink>
  );
};

export default Logo;

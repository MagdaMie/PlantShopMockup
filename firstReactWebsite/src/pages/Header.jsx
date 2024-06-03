import Nav from "../components/Nav";
import Logo from "./Logo";

const Header = ({ numberOfCartProducts }) => {
  return (
    <div className="flex items-center justify-between w-full h-[13vh] sticky top-0 bg-darkGray">
      <div className="m-8">
        <Logo />
      </div>
      <Nav
        numberOfCartProducts={numberOfCartProducts}
        displayHorizontal={true}
      />
    </div>
  );
};

export default Header;

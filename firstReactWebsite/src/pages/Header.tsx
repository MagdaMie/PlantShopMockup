import Nav from "../components/Nav";
import Logo from "../components/Logo";
type HeaderProps = {
  numberOfCartProducts: number;
}

const Header = ({ numberOfCartProducts }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full h-[13vh] sticky top-0 z-50 bg-darkGray">
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

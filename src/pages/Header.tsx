import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Logo from "../components/Logo";

type HeaderProps = {
  numberOfCartProducts: number;
}

const Header = ({ numberOfCartProducts }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full h-[60px] sticky top-0 z-50 bg-darkGray lg:h-[100px]" >
      <div className="lg:m-8 ">
        <Logo />
      </div>
      <Nav
        numberOfCartProducts={numberOfCartProducts}
        displayHorizontal={true}
      />
      <NavMobile 
      numberOfCartProducts={numberOfCartProducts}/>
    </div>
  );
};

export default Header;

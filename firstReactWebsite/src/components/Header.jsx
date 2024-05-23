import Nav from "./Nav";

const Header = ({ noOfCartProducts }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/Logo.png" alt="" />
      </div>
    <Nav 
    noOfCartProducts={noOfCartProducts}
    displayNav={'nav-h'}
    displayNavElement={'nav-item-h'}/>
    </div>
  );
};

export default Header;

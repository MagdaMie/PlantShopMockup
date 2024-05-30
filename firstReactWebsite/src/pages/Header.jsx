import Nav from "../components/Nav";

const Header = ({ numberOfCartProducts }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/Logo.png" alt="" />
      </div>
      <Nav
        numberOfCartProducts={numberOfCartProducts}
        displayNav={"nav-h"}
        displayNavElement={"nav-item-h"}
      />
    </div>
  );
};

export default Header;

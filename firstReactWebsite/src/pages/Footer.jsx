import InstagramDisplayFooter from "../components/InstagramDisplayFooter";
import Nav from "../components/Nav";
import ContactFooter from "../components/ContactFooter";

const Footer = () => {
  return (
    <div className="footer">
      <InstagramDisplayFooter />
      <Nav displayNav={"nav-v"} displayNavElement={"nav-item-v"} />
      <ContactFooter />
    </div>
  );
};

export default Footer;

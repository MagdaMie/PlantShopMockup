import InstagramDisplayFooter from "../components/InstagramDisplayFooter";
import Nav from "../components/Nav";
import ContactFooter from "../components/ContactFooter";

const Footer = () => {
  return (
    <div className="footer">
      <InstagramDisplayFooter />
      <Nav displayHorizontal={false} />
      <ContactFooter />
    </div>
  );
};

export default Footer;

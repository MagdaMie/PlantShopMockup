import InstagramDisplayFooter from "../components/InstagramDisplayFooter";
import Nav from "../components/Nav";
import ContactFooter from "../components/ContactFooter";

const Footer = () => {
  return (
    <div className="flex justify-around items-center w-full py-8">
      <InstagramDisplayFooter />
      <Nav displayHorizontal={false} />
      <ContactFooter />
    </div>
  );
};

export default Footer;

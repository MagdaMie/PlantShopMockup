import InstagramDisplayFooter from "../components/InstagramDisplayFooter";
import Nav from "../components/Nav";
import ContactFooter from "../components/ContactFooter";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 py-8 lg:flex-row lg:justify-around lg:gap-0">
      <InstagramDisplayFooter />
      <Nav displayHorizontal={false} />
      <ContactFooter />
    </div>
  );
};

export default Footer;

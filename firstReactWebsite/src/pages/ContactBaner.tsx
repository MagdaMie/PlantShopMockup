import ContactBanerImg from "../assets/siteBaner.png";

const ContactBaner = () => {
  return (
    <div
      className="flex flex-col justify-center items-center  bg-no-repeat h-[200px] md:flex-1 md:h-[85vh] "
      style={{ backgroundImage: `url(${ContactBanerImg})` }}
    >
      <h3 className="contact-page-header">Get in</h3>
      <h3 className="contact-page-header"> touch</h3>
    </div>
  );
};

export default ContactBaner;

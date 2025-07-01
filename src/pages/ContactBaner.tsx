import ContactBanerImg from "../assets/siteBaner.png";

const ContactBaner = () => {
  return (
    <div
      className="flex flex-col justify-center items-center  bg-no-repeat h-[200px] md:flex-row min-h-[calc(100vh-200px)] md:flex-1 "
      style={{ backgroundImage: `url(${ContactBanerImg})` }}
    >
      <h3 className="contact-page-header">Get in</h3>
      <h3 className="contact-page-header"> touch</h3>
    </div>
  );
};

export default ContactBaner;

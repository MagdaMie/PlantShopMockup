import ContactBanerImg from "../assets/siteBaner.png";

const ContactBaner = () => {
  return (
    <div
      className="flex h-[200px] min-h-[calc(100vh-200px)] flex-col items-center justify-center bg-no-repeat md:flex-1 md:flex-row"
      style={{ backgroundImage: `url(${ContactBanerImg})` }}
    >
      <h3 className="contact-page-header">Get in</h3>
      <h3 className="contact-page-header"> touch</h3>
    </div>
  );
};

export default ContactBaner;

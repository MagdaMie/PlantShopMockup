import ContactForm from "../components/ContactForm";
import Notification from "../components/Notification";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[85vh]">
      <div
        className="flex flex-col justify-center items-center  bg-no-repeat h-[200px] md:flex-1 md:h-[85vh] "
        style={{ backgroundImage: "url('/siteBaner.png')" }}
      >
        <h3 className="contact-page-header">Get in</h3>
        <h3 className="contact-page-header"> touch</h3>
      </div>

      <div className="flex flex-col justify-center items-center bg-customGreen-dark bg-opacity-40 py-4 md:flex-1 md:py-0">
        <ContactForm />
      </div>
      <Notification />
    </div>
  );
};

export default ContactPage;

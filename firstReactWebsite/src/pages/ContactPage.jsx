import ContactForm from "../components/ContactForm";
import ContactBaner from "./ContactBaner";
import Notification from "../components/Notification";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[85vh]">
      <ContactBaner />

      <div className="flex flex-col justify-center items-center bg-customGreen-dark bg-opacity-40 py-4 md:flex-1 md:py-0">
        <ContactForm />
      </div>
      <Notification />
    </div>
  );
};

export default ContactPage;

import ContactForm from "../components/ContactForm";
import ContactBaner from "./ContactBaner";
import Notification from "../components/Notification";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <ContactBaner />

      <div className="flex flex-col items-center justify-center bg-customGreen-dark bg-opacity-40 py-4 md:flex-1 md:flex-row md:py-0">
        <ContactForm />
      </div>
      <Notification />
    </div>
  );
};

export default ContactPage;

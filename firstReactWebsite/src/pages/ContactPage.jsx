import ContactForm from "../components/ContactForm";
import Notification from "../components/Notification";

const ContactPage = () => {
  return (
    <div className="flex h-[85vh]">
      <div
        className="flex flex-1 flex-col justify-center items-center text-7xl font-bold  bg-no-repeat "
        style={{ backgroundImage: "url('/siteBaner.png')" }}
      >
        <h3>Get in</h3>
        <h3> touch</h3>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center bg-customGreen-dark bg-opacity-40 ">
        <ContactForm />
      </div>
      <Notification />
    </div>
  );
};

export default ContactPage;

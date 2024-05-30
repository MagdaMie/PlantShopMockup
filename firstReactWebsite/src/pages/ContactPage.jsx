import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-left">
        <h3>
          <span>Get in</span>
          <span> touch</span>
        </h3>
      </div>

      <div className="contact-page-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

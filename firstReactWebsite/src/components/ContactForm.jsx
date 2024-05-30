import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lv0ohw8", "template_jkz0z7f", form.current, {
        publicKey: "9dbeY18gXU1U0ji_B",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          prompt("Message send!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message..."
      ></textarea>
      <button type="submit">Sent</button>
    </form>
  );
};

export default ContactForm;

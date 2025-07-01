import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import useNotificationStore from "../stores/notoficationStore";
import Button from "./Button";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

// with hookform and zod

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const form = useRef<HTMLFormElement>(null);
  const setNotification = useNotificationStore(
    (state) => state.setNotification
  );

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        "service_lv0ohw8",
        "template_jkz0z7f",
        form.current!,
        { publicKey: "9dbeY18gXU1U0ji_B" }
      );

      setNotification("Message send suesfully!");
      reset();
    } catch (error) {
      console.error("Failed to send message", error);
      setNotification("Failed to send message, please try again.");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center "
    >
      <input
        type="text"
        {...register("name")}
        placeholder="name"
        className="input-field"
      />
      {errors.name && (
        <div className="error-text">
          {errors.name.message}
        </div>
      )}
      <input
        type="text"
        {...register("email")}
        placeholder="e-mail"
        className="input-field"
      />
      {errors.email && (
        <div className="error-text">
          {errors.email.message}
        </div>
      )}
      <textarea
        {...register("message")}
        placeholder="your message..."
        className="input-field h-[200px]"
      ></textarea>
      {errors.message && (
        <div className="error-text">
          {errors.message.message}
        </div>
      )}
      <div className="py-4">  <Button
        type="submit"
        content={isSubmitting ? "Submitting..." : "Submit"}
        disable={isSubmitting}
      ></Button></div>
    
    </form>
  );
};

// // pure react
// const ContactForm = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_lv0ohw8", "template_jkz0z7f", form.current, {
//         publicKey: "9dbeY18gXU1U0ji_B",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           prompt("Message send!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Enter your message..."
//       ></textarea>
//       <button type="submit">Sent</button>
//     </form>
//   );
// };

export default ContactForm;

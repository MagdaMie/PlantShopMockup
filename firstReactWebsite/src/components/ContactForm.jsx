import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const schema = z.object({
  name: z.string().nonempty("Required"),
  email: z.string().email(),
  message: z.string().nonempty("Required"),
});

// with hookform and zod

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const form = useRef();

  const [isSending, setIsSending] = useState(false);

  const notifySuccess = () => toast.success("Message send");
  const notifyError = () =>
    toast.error("Failed to send message, please try again.");

  const onSubmit = async () => {
    if (isSending) return; // Prevent multiple submissions
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_lv0ohw8",
        "template_jkz0z7f",
        form.current,
        {
          publicKey: "9dbeY18gXU1U0ji_B",
        }
      );
      notifySuccess();
      // maybe this is wrong
      reset(); 
    } catch (error) {
      console.error("Failed to send message", error);
      notifyError();
    } finally {
      // chane to counter
      setIsSending(false);
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="name" />
        {errors.name && (
          <div className="text-red-400">{errors.name.message}</div>
        )}
        <input type="text" {...register("email")} placeholder="Email" />
        {errors.email && (
          <div className="text-red-400">{errors.email.message}</div>
        )}
        <textarea
          {...register("message")}
          placeholder="Enter your message..."
        ></textarea>
        {errors.message && (
          <div className="text-red-400">{errors.message.message}</div>
        )}
        <button type="submit" disabled={isSending}>
          Send
        </button>
        <ToastContainer theme={"dark"} />
      </form>
    </div>
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
//     setFormData({ ...formData, [name]: value });
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

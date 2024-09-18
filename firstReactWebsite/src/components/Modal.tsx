import useCartStore from "../stores/cartStore";
import { useEffect } from "react";

type ModalProps = {
  message: null | string;
};
const Modal = ({ message }: ModalProps) => {
  const { closeModal } = useCartStore();

useEffect ( () => {
if(message) {
    const timer = setTimeout(() => {
        closeModal();
    }, 2000);
    return() => clearTimeout(timer);
}
}, [message])

  if (!message) return null;
  return (
    <div className="modal">
      <button onClick={closeModal}>x</button>
      <h3 className="modal-content">{message}</h3>
    </div>
  );
};

export default Modal;

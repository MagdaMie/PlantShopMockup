import useCartStore from "../stores/cartStore";
import { useEffect, useState } from "react";

type ModalProps = {
  message: null | string;
};
const Modal = ({ message }: ModalProps) => {
  const { closeModal } = useCartStore();

  const[timeLeft, setTimeLeft] = useState(100)

useEffect ( () => {
if(message) {
   const timerInterval = 20;
   const totalDuration = 2000;
   let timeElapsed = 0

   const interval = setInterval(() => {
    timeElapsed += timerInterval
    const newTimeLeft = 100 -(timeElapsed/totalDuration) *100
    setTimeLeft(newTimeLeft)

    if (timeElapsed >= totalDuration){
        clearInterval(interval);
        closeModal();
    }
   }, timerInterval);
   
   return()=> clearInterval(interval)
}
}, [message])

  if (!message) return null;
  return (
    <div className="modal">
      <button onClick={closeModal}>x</button>
      <h3 className="modal-content">{message}</h3>
      <div
          className="progress-bar"
          style={{
            height: "30px",
            width: `${timeLeft}%`,
            backgroundColor: "#4caf50",
            transition: "width 20ms linear"
          }}
        />
    </div>
  );
};

export default Modal;

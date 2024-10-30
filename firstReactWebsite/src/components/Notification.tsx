
import { useEffect, useState } from "react";
import useNotificationStore from "../stores/notoficationStore";


const Notification = () => {
  const {notification} = useNotificationStore((state) => ({notification: state.notification}))
  const {clearNotification} = useNotificationStore((state)=> ({clearNotification: state.clearNotification})) 

  const[timeLeft, setTimeLeft] = useState(100)

useEffect ( () => {
if(notification) {
   const timerInterval = 20;
   const totalDuration = 2000;
   let timeElapsed = 0

   const interval = setInterval(() => {
    timeElapsed += timerInterval
    const newTimeLeft = 100 -(timeElapsed/totalDuration) *100
    setTimeLeft(newTimeLeft)

    if (timeElapsed >= totalDuration){
        clearInterval(interval);
        clearNotification();

    }
   }, timerInterval);
   
   return()=> clearInterval(interval)
}
}, [notification])

  if (!notification) return null;
  return (
    <div className="modal">
      <button >x</button>
      <h3 className="modal-content">{notification}</h3>
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

export default Notification;

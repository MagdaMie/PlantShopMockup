import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import useNotificationStore from "../stores/notoficationStore";

const Notification = () => {
  const { notification, id } = useNotificationStore((state) => ({
    notification: state.notification,
    id: state.id
  }));
  const { clearNotification } = useNotificationStore((state) => ({
    clearNotification: state.clearNotification,
  }));

  const [timeLeft, setTimeLeft] = useState(100);

  useEffect(() => {
    if (notification) {
      const timerInterval = 20;
      const totalDuration = 2000;
      let timeElapsed = 0;

      const interval = setInterval(() => {
        timeElapsed += timerInterval;
        const newTimeLeft = 100 - (timeElapsed / totalDuration) * 100;
        setTimeLeft(newTimeLeft);

        if (timeElapsed >= totalDuration) {
          clearInterval(interval);
          clearNotification();
        }
      }, timerInterval);

      return () => clearInterval(interval);
    }
  }, [notification, id]);

  if (!notification) return null;
  const portalTarget = document.getElementById("notification-root");
  if (!portalTarget) return null;
  return ReactDOM.createPortal(
    <div key={id} className="modal">
    
      <div className="notification-container">
        
        <div className="modal-content"><h3 >{notification}</h3></div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${timeLeft}%` }} />
        </div>
      </div>
    </div>,
    portalTarget
  );
};

export default Notification;

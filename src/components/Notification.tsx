import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import useNotificationStore from "../stores/notoficationStore";

const Notification = () => {
  const { notification, id } = useNotificationStore((state) => ({
    notification: state.notification,
    id: state.id,
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
    <div
      key={id}
      className="fixed top-[85px] right-1/2 transform translate-x-1/2 w-[300px] max-h-[100px] rounded-lg bg-[#333] text-white z-50 opacity-90 md:right-[20px] md:transform-none"
    >
      <div className="flex flex-col gap-3 m-3">
        <h3 className="text-xs">{notification}</h3>

        <div className="w-full h-1.5 bg-[#333] ">
          <div
            className="h-full bg-customGreen-default transition-all duration-[20ms] ease-linear rounded-md"
            style={{ width: `${timeLeft}%` }}
          />
        </div>
      </div>
    </div>,
    portalTarget
  );
};

export default Notification;

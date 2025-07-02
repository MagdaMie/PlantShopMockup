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
      className="fixed right-1/2 top-[85px] z-50 max-h-[100px] w-[300px] translate-x-1/2 transform rounded-lg bg-[#333] text-white opacity-90 md:right-[20px] md:transform-none"
    >
      <div className="m-3 flex flex-col gap-3">
        <h3 className="text-xs">{notification}</h3>

        <div className="h-1.5 w-full bg-[#333]">
          <div
            className="h-full rounded-md bg-customGreen-default transition-all duration-[20ms] ease-linear"
            style={{ width: `${timeLeft}%` }}
          />
        </div>
      </div>
    </div>,
    portalTarget,
  );
};

export default Notification;

import { create } from "zustand";

type NotificationState = {
  notification: string | null;
  setNotification: (notification: string | null) => void;
  clearNotification: () => void;
};

const useNotificationStore = create<NotificationState>((set) => ({
  notification: null,
  setNotification: (message) => set({ notification: message }),
  clearNotification: () => set({notification:null})
}));

export default useNotificationStore
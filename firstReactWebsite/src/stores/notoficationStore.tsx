import { create } from "zustand";

type NotificationState = {
  notification: string | null;
  id: number| null;
  setNotification: (notification: string | null) => void;
  clearNotification: () => void;
};

const useNotificationStore = create<NotificationState>((set) => ({
  notification: null,
  id:null,
  
  setNotification: (message) => set({ notification: message, id: Date.now() }),
  clearNotification: () => set({notification:null, id:null})
}));

export default useNotificationStore
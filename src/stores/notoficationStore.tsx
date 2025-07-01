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
  
  setNotification: (message) => {
    set({ notification: message, id: Date.now() });

    // Automatically clear notification after 3 seconds
    setTimeout(() => {
      set({ notification: null, id: null });
    }, 2000);
  },

  
  clearNotification: () => set({notification:null, id:null})
}));

export default useNotificationStore
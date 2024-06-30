import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {},
      setUser: (userDetails) => set({ user: userDetails }),
    }),
    {
      name: "userData",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {},
      password: "",
      phoneNumber: "",
      formData: {
        step1: {},
        step2: {},
        step3: {},
        step4: {},
        step5: {},
        step6: {},
        step7: {},
        step8: {},
        step9: {},
        step10: {},
        step11: {},
        step12: {},
      },

      setUser: (userDetails) => set({ user: userDetails }),
      setPassword: (password) => set({ password }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      updateFormData: (step, data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [step]: { ...state.formData[step], ...data },
          },
        })),
    }),
    {
      name: "userData",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;

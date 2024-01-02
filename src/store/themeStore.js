import { create } from "zustand";
import storage from "../storage";

const themeStore = create((set) => ({
  dark: false,
  toggleTheme: () =>
    set((state) => {
      storage.set("@ht:theme", !state.dark);
      return { dark: !state.dark };
    }),
  themeRestore: (dark) => {
    return set({ dark: dark });
  },
}));

export default themeStore;

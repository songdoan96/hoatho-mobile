import { create } from "zustand";
import customerAxios from "../axios";
import storage from "../storage";

const authStore = create((set) => ({
  user: null,
  loginLoading: false,
  loginError: null,
  registerLoading: false,
  registerError: null,
  authLogin: async (formData) => {
    set((state) => ({ ...state, loginError: null }));

    if (!formData.username || !formData.password) {
      set((state) => ({
        ...state,
        loginError: "Mã số nhân viên, mật khẩu không được trống.",
      }));
    } else {
      set((state) => ({ ...state, loginLoading: true }));
      const { data } = await customerAxios.post("/login", formData);
      if (data.status !== 200) {
        set((state) => ({ ...state, loginError: data.error }));
      }
      if (data.status === 200) {
        let user = JSON.stringify(data.user);
        storage.set("@ht:user", user);
        set((state) => ({ ...state, user: data.user, loginError: null }));
      }
      set((state) => ({ ...state, loginLoading: false }));
    }
  },
  authRestore: (user) => set((state) => ({ ...state, user })),
  authLogout: () => {
    storage.delete("@ht:user");
    // storage.clearAll();
    set((state) => ({ ...state, user: null }));
  },
}));

export default authStore;

import { create } from "zustand";
const initialState = {
  show: false,
  p: "top",
  a: "success",
  t: "Thông báo",
  d: "",
};
const toastStore = create((set) => ({
  initialState,
  setShowToast: ({ p = "top", a = "success", t = "Thông báo", d }) => {
    return set({
      show: true,
      p,
      a,
      t,
      d,
    });
  },
  setHideToast: () => {
    set(initialState);
  },
}));

export default toastStore;

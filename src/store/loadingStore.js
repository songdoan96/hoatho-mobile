import { create } from "zustand";

const loadingStore = create((set) => ({
  loading: false,

  setLoading: () => set({ loading: true }),
}));

export default loadingStore;

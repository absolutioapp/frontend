import { create } from "zustand";

interface AppStore {
  isLoading: boolean;
  lang: "en" | "ru" | "il";
  theme: "dark" | "light";

  setLoading: (loading: boolean) => void;
  setLang: (lang: "en" | "ru" | "il") => void;
  setTheme: (theme: "dark" | "light") => void;
}

const useAppStore = create<AppStore>((set) => ({
  isLoading: false,
  lang: "en",
  theme: "light",

  setLoading: (loading) => set({ isLoading: loading }),
  setLang: (lang) => set({ lang }),
  setTheme: (theme) => set({ theme }),
}));

export default useAppStore;

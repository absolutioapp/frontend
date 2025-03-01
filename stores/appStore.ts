import { create } from "zustand";

export type AppError = {
  message: string;
  code: number;
};
interface AppStore {
  isLoading: boolean;
  lang: "en" | "ru" | "il";
  theme: "dark" | "light";
  error: AppError | null;

  setLoading: (loading: boolean) => void;
  setLang: (lang: "en" | "ru" | "il") => void;
  setTheme: (theme: "dark" | "light") => void;
  setError: (error: AppError) => void;
}

const useAppStore = create<AppStore>((set) => ({
  isLoading: false,
  lang: "en",
  theme: "light",
  error: null,

  setLoading: (loading) => set({ isLoading: loading }),
  setLang: (lang) => set({ lang }),
  setTheme: (theme) => set({ theme }),
  setError: (error) => {
    set({ error });
    setTimeout(() => set({ error: null }), 3000);
  },
}));

export default useAppStore;

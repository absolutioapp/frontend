import { create } from "zustand";

interface UserStore {
  idToken: string;
  accessToken: string;
  name: string;
  isSubscriber: boolean;

  setIdToken: (token: string) => void;
  setAccessToken: (token: string) => void;
  setName: (name: string) => void;
  setIsSubscriber: (isSubscriber: boolean) => void;

  setUser: (user: Partial<UserStore>) => void;
}

const useUserStore = create<UserStore>((set) => ({
  idToken: "",
  accessToken: "",
  name: "",
  isSubscriber: false,

  setIdToken: (token: string) => set({ idToken: token }),
  setAccessToken: (token: string) => set({ accessToken: token }),
  setName: (name: string) => set({ name }),
  setIsSubscriber: (isSubscriber: boolean) => set({ isSubscriber }),

  setUser: (user: Partial<UserStore>) =>
    set((state) => ({ ...state, ...user })),
}));

export default useUserStore;

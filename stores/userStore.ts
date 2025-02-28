import { create } from "zustand";

interface UserStore {
  token: string;
  refresh_token: string;
  name: string;
  isSubscriber: boolean;

  setToken: (token: string) => void;
  setRefreshToken: (refresh_token: string) => void;
  setName: (name: string) => void;
  setIsSubscriber: (isSubscriber: boolean) => void;

  setUser: (user: UserStore) => void;
}

const useUserStore = create<UserStore>((set) => ({
  token: "",
  refresh_token: "",
  name: "",
  isSubscriber: false,

  setToken: (token: string) => set({ token }),
  setRefreshToken: (refresh_token: string) => set({ refresh_token }),
  setName: (name: string) => set({ name }),
  setIsSubscriber: (isSubscriber: boolean) => set({ isSubscriber }),

  setUser: (user: UserStore) => set(user),
}));

export default useUserStore;

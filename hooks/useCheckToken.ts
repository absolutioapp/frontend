import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useRouter } from "expo-router";
import useUserStore from "@/stores/userStore";
import HttpService from "@/service/httpService";

export const useCheckToken = () => {
  const router = useRouter();
  const { setUser } = useUserStore();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const tokens = await AsyncStorage.multiGet([
          "userAccessToken",
          "userTokenId",
        ]);

        const storedAccessToken = tokens[0][1];
        const storedIdToken = tokens[1][1];

        if (tokens.length === 0) {
          console.log("No tokens found, redirecting to login");
          router.replace("/");
          return;
        }

        setUser({
          accessToken: storedAccessToken ?? "",
          idToken: storedIdToken ?? "",
        });

        router.replace("/(dashboard)/wallpaper");

        try {
          await HttpService.google.getProfile();
        } catch (error) {
          console.log("Token validation failed:", error);
          await AsyncStorage.multiRemove([
            "userAccessToken",
            "userTokenId",
            "userRefreshToken",
          ]);
          setUser({
            accessToken: "",
            idToken: "",
          });
          router.replace("/");
        }
      } catch (error) {
        console.error("Error checking token:", error);
        router.replace("/");
      }
    };

    checkToken();
  }, []);
};

export default useCheckToken;

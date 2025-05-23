import React, { useEffect } from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  signInWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "expo-router";
import CustomButton from "../../../components/ui-kit/Button/Button";
import { ButtonTypes } from "../../../components/ui-kit/Button/Button.types";
import useUserStore from "@/stores/userStore";
import { auth } from "@/firebaseConfig";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthButton from "@/components/AuthButton";

// Настройка для использования WebBrowser
WebBrowser.maybeCompleteAuthSession();

// Firebase инициализация

export default function GoogleAuth() {
  const router = useRouter();
  const userStore = useUserStore();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIEND_ID,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    redirectUri: process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URI,
    scopes: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });

  const saveTokens = async (idToken: string, accessToken: string) => {
    try {
      await AsyncStorage.setItem("userTokenId", idToken);
      await AsyncStorage.setItem("userAccessToken", accessToken);
      userStore.setIdToken(idToken);
      userStore.setAccessToken(accessToken);
    } catch (error) {
      console.error("Ошибка при сохранении токенов:", error);
    }
  };

  useEffect(() => {
    const handleAuthResponse = async () => {
      if (response?.type === "success") {
        if (Platform.OS !== "web") {
          // Для мобильной версии
          const { id_token, access_token } = response.params;
          await saveTokens(id_token, access_token);
          router.replace("/(dashboard)/diary");
        } else {
          // Для веб-версии
          try {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            const userCredential = await signInWithCredential(auth, credential);
            const idToken = await userCredential.user.getIdToken();
            const accessToken = (userCredential as any)._tokenResponse
              ?.oauthAccessToken;

            if (idToken && accessToken) {
              await saveTokens(idToken, accessToken);
              router.replace("/(dashboard)/diary");
            }
          } catch (error) {
            console.error("Ошибка при обработке веб-авторизации:", error);
          }
        }
      }
    };

    handleAuthResponse();
  }, [response]);

  const signInWithGoogle = async () => {
    if (Platform.OS === "web") {
      try {
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
        const userCredential = await signInWithPopup(auth, provider);
        const idToken = await userCredential.user.getIdToken();
        const accessToken = (userCredential as any)._tokenResponse
          ?.oauthAccessToken;

        if (idToken && accessToken) {
          await saveTokens(idToken, accessToken);
          router.replace("/(dashboard)/diary");
        }
      } catch (error) {
        console.error("Ошибка при входе через Google:", error);
      }
    } else {
      try {
        await promptAsync();
      } catch (error) {
        console.error("Ошибка при входе через Google:", error);
      }
    }
  };

  return (
    <AuthButton
      label="Continue with Google"
      onPress={signInWithGoogle}
      textColor="#dce8f3"
      bgColor="#2c3135"
      icon={
        <AntDesign
          name="google"
          size={18}
          className="flex items-center justify-center opacity-1"
          color={"#ffffff"}
        />
      }
    />
  );
}

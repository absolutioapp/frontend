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

// Настройка для использования WebBrowser
WebBrowser.maybeCompleteAuthSession();

// Firebase инициализация

export default function GoogleAuth() {
  const router = useRouter();
  const userStore = useUserStore();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    redirectUri: process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URI,
  });

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      userStore.setToken(id_token);
      router.replace("/(dashboard)/diary");
    }
  }, [response]);

  const signInWithGoogle = async () => {
    if (Platform.OS === "web") {
      // Веб-версия (работает с popup)
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Вошли как:", userCredential.user.email);
      userStore.setToken(userCredential.user.accessToken);
      router.replace("/(dashboard)/diary");
    } else {
      try {
        await promptAsync();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CustomButton
      text="Continue with Google"
      handleClick={() => {
        signInWithGoogle();
      }}
      buttonType={ButtonTypes.primary}
      customStyles="background-color: #4285F4!important;"
      isIcon
      IconValue={
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

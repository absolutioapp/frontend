import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "expo-router";
import CustomButton from "../../../components/ui-kit/Button/Button";
import { ButtonTypes } from "../../../components/ui-kit/Button/Button.types";
import useUserStore from "@/stores/userStore";
import { firebaseConfig } from "@/firebaseConfig";
import AntDesign from "@expo/vector-icons/AntDesign";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

// Настройка для использования WebBrowser
WebBrowser.maybeCompleteAuthSession();

// Firebase инициализация
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function GoogleAuth() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const userStore = useUserStore();

  const signInWithGoogle = async () => {
    if (Platform.OS === "web") {
      // Веб-версия (работает с popup)
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Вошли как:", userCredential.user.email);
      userStore.setToken(userCredential.user.accessToken);
    } else {
      try {
        console.log("Успешный вход через Google");
        // userStore.setToken(userCredential.user.accessToken);
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

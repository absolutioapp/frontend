import { useState } from "react";
import { View, Text } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import CustomButton from "../../ui-kit/Button/Button";
import { ButtonTypes } from "../../ui-kit/Button/Button.types";
import Input from "../../ui-kit/Input/Input";
import useUserStore from "@/stores/userStore";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EmailSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userStore = useUserStore();

  const saveTokens = async (idToken: string) => {
    try {
      await AsyncStorage.setItem("userTokenId", idToken);
      userStore.setIdToken(idToken);
    } catch (error) {
      console.error("Ошибка при сохранении токена:", error);
    }
  };

  const handleEmailAuth = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      await saveTokens(idToken);
      router.replace("/(dashboard)/diary");
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const idToken = await userCredential.user.getIdToken();
          await saveTokens(idToken);
          router.replace("/(dashboard)/diary");
        } catch (registrationError: any) {
          setError(registrationError.message);
        }
      } else {
        setError(error.message);
      }
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const changeEmail = (email: string) => {
    email !== "" && setIsEmailValid(validateEmail(email));
    setEmail(email);
    setError(null);
  };

  return (
    <View
      style={{ gap: 55, display: "flex", alignItems: "center", width: "80%" }}
    >
      <Input
        placeholder="your@email.com"
        value={email}
        label="Email"
        onChangeText={changeEmail}
        keyboardType="email-address"
        error={!isEmailValid && email !== ""}
        errorMessage={"Please enter a valid email"}
      />

      <Input
        placeholder="********"
        value={password}
        label="Password"
        onChangeText={setPassword}
        secureTextEntry
      />

      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}

      <CustomButton
        text="Continue"
        disabled={!email || !password}
        handleClick={handleEmailAuth}
        buttonType={ButtonTypes.primary}
      />
    </View>
  );
}

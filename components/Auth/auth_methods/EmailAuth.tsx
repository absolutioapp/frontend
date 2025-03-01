import { useEffect, useState } from "react";
import { View } from "react-native";
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

export default function EmailSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const userStore = useUserStore();

  const handleEmailAuth = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        userStore.setToken(userCredential.user.accessToken);
        router.replace("/(dashboard)/diary");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log("User registered:", userCredential.user);
              userStore.setToken(userCredential.user.accessToken);
              router.replace("/(dashboard)/diary");
            })
            .catch((registrationError) => {});
        } else {
        }
      });
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const changeEmail = (email: string) => {
    email !== "" && setIsEmailValid(validateEmail(email));
    setEmail(email);
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

      <CustomButton
        text="Continue"
        disabled={!email || !password}
        handleClick={() => {
          handleEmailAuth();
        }}
        buttonType={ButtonTypes.primary}
      />
    </View>
  );
}

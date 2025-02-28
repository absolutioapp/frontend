import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth, GoogleSignin } from "@/service/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import CustomButton from "../ui-kit/Button/Button";
import { ButtonTypes } from "../ui-kit/Button/Button.types";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSignUp = () => {
    console.log("handleSignUp");
    router.push("/modal");
  };

  const handleSignIn = async () => {
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    // } catch (err: any) {
    //   setError(err.message);
    // }
  };

  const handleGoogleSignIn = async () => {
    try {
      //   await GoogleSignin.hasPlayServices();
      //   const userInfo = await GoogleSignin.signIn();
      //   const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      //   await signInWithCredential(auth, googleCredential);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "80%",
        margin: "auto",
        paddingTop: 20,
        maxWidth: 2000,
      }}
    >
      <CustomButton
        text="Continue with Email"
        handleClick={() => {
          handleSignUp();
        }}
        buttonType={ButtonTypes.primary}
        isIcon
        IconValue={
          <AntDesign
            name="mail"
            size={24}
            className="flex items-center justify-center opacity-1"
            color={"white"}
          />
        }
      />
      <CustomButton
        text="Continue with Google"
        handleClick={() => {}}
        buttonType={ButtonTypes.primary}
        disabled
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
      <CustomButton
        text="Continue with Apple"
        handleClick={handleGoogleSignIn}
        isIcon
        IconValue={
          <AntDesign
            name="apple1"
            size={18}
            className="flex items-center justify-center opacity-1"
            color={"white"}
          />
        }
        buttonType={ButtonTypes.primary}
        customStyles="background-color: black!important;"
        disabled
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Auth;

/*

customStyles="!bg-[#4285F4]"
customStyles="!bg-gray-800"*/

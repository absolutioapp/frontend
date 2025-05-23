import React, { useEffect } from "react";
import { View } from "react-native";
import CustomButton from "../ui-kit/Button/Button";
import { ButtonTypes } from "../ui-kit/Button/Button.types";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

import GoogleAuth from "./auth_methods/GoogleAuth";
import AuthButton from "../AuthButton";

const Auth = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/email_modal");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        margin: "auto",
        width: "90%",
        maxWidth: 580,
      }}
    >
      <AuthButton
        label="Continue with Email"
        bgColor="#dce8f3"
        textColor="#121416"
        onPress={() => {
          handleSignUp();
        }}
        icon={
          <AntDesign
            name="mail"
            size={18}
            className="flex items-center justify-center opacity-1"
            color={"black"}
          />
        }
      />
      <GoogleAuth />
      <AuthButton
        label="Continue with Apple"
        onPress={() => {}}
        textColor="#dce8f3"
        bgColor="#2c3135"
        icon={
          <AntDesign
            name="apple1"
            size={18}
            className="flex items-center justify-center opacity-1"
            color={"white"}
          />
        }
        disabled
      />
    </View>
  );
};

export default Auth;

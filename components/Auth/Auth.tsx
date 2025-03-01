import React, { useEffect } from "react";
import { View } from "react-native";
import CustomButton from "../ui-kit/Button/Button";
import { ButtonTypes } from "../ui-kit/Button/Button.types";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

import GoogleAuth from "./auth_methods/GoogleAuth";

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
      {/* <CustomButton
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
      /> */}
      <GoogleAuth />
      <CustomButton
        text="Continue with Apple"
        handleClick={() => {}}
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
      {/* {error ? <Text>{error}</Text> : null} */}
    </View>
  );
};

export default Auth;

import React from "react";
import { Button, Image, View, Dimensions, StyleSheet } from "react-native";
import logo from "@/assets/images/logos/LOGO_WITH_TEXT_WITHOUT_BG.png";
import Auth from "@/components/Auth/Auth";

const { width, height } = Dimensions.get("window");
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={logo} />
      </View>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: height,
  },
  imageContainer: {
    paddingTop: 100,
    width: width * 0.9, // 50% of screen width
    height: width * 0.9, // 50% of screen width
    maxWidth: 400,
    maxHeight: 400,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});


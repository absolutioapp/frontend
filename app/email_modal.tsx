import EmailSignIn from "@/components/Auth/auth_methods/EmailAuth";
import { Link, router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function EmailModal() {
  const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <EmailSignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: height,
    position: "relative",
  },
});

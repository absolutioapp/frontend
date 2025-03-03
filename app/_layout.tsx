import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "web") {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://accounts.google.com/gsi/client";
      scriptTag.async = true;
      // scriptTag.onload = () => {
      //   setLoaded(true);
      // };
      scriptTag.onerror = () => {
        console.error("Failed to load Google script");
      };

      document.body.appendChild(scriptTag);
    }
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="email_modal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

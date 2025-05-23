import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import { useFonts } from "expo-font";

export default function DashboardLayout() {
  const [loaded, error] = useFonts({
    "Plus Jacarta": require("../../assets/fonts/PJS_NORMAL.ttf"),
  });

  return (
    <ProtectedRoute>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.green,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="wallpaper"
          options={{
            title: "asdf",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="add-to-home-screen"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="diary"
          options={{
            title: "asdf",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="calendar-view-month"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "asdf",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person-outline" size={30} color={color} />
            ),
          }}
        />
      </Tabs>
    </ProtectedRoute>
  );
}

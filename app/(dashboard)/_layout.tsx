import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import useUserStore from "@/stores/userStore";

export default function DashboardLayout() {
  const { token } = useUserStore();

  return (
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
            <MaterialIcons name="add-to-home-screen" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "asdf",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-view-month" size={30} color={color} />
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
  );
}

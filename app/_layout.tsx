import { AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </AuthProvider>
  );
}

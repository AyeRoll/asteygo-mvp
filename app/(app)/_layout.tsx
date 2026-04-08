import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function AppLayout() {
  const { user, isReady } = useContext(AuthContext);

  if (!isReady) return null;

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return <Stack screenOptions={{ headerShown: false, animation: "none" }} />;
}

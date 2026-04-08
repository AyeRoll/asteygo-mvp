import { AuthContext } from "@/utils/authContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const authState = useContext(AuthContext);
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/")}>
        <Ionicons name="home" size={20} color="grey" />
      </TouchableOpacity>
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity
        onPress={authState.logOut}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "red",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

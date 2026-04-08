import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("./settings")}>
        <Ionicons name="build" size={20} color="grey" />
      </TouchableOpacity>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

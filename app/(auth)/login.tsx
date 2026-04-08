// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
import { AuthContext } from "@/utils/authContext";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import React, { useContext } from "react";
import { Text, View } from "react-native";

export default function LoginScreen() {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          marginBottom: 20,
        }}
      >
        Signing in to Asteygo?
      </Text>
      <GoogleSigninButton
        onPress={signInWithGoogle}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Light}
      />
    </View>
  );
}

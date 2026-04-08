import { auth } from "@/firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { SplashScreen } from "expo-router";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
  User,
} from "firebase/auth";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

SplashScreen.preventAutoHideAsync();
type AuthState = {
  user: User | null;
  isReady: boolean;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthState>({
  user: null,
  isReady: false,
  signInWithGoogle: async () => {},
  logOut: async () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
      iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    });
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsReady(true);
      SplashScreen.hideAsync();
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (response.type !== "success") return; // cancelled or no saved credential
    const { idToken } = response.data;
    if (!idToken)
      throw new Error("Google sign-in succeeded but idToken was missing");
    const credential = GoogleAuthProvider.credential(idToken);
    await signInWithCredential(auth, credential);
    if (idToken && response.type === "success") {
      setIsReady(true);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        isReady,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

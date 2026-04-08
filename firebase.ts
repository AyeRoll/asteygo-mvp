import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl5595EV1hxCVSaO7bJhsKDsqiM116I9A",
  authDomain: "asteygo-mvp.firebaseapp.com",
  projectId: "asteygo-mvp",
  storageBucket: "asteygo-mvp.firebasestorage.app",
  messagingSenderId: "972100702492",
  appId: "1:972100702492:web:92a01358b3f11b7238ead9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);

// async function getGroups(db) {
//   const groupsCol = collection(db, "groups");
//   const groupSnapshot = await getDocs(groupsCol);
//   const groupList = groupSnapshot.docs.map((doc) => doc.data());
//   return groupList;
// }

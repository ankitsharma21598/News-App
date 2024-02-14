// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT-BwoWlWY-Ax3JI73HCwmKF8H-cgoGaE",
  authDomain: "triveous-82557.firebaseapp.com",
  projectId: "triveous-82557",
  storageBucket: "triveous-82557.appspot.com",
  messagingSenderId: "930897794415",
  appId: "1:930897794415:web:465d7f0a7b367d4a7c049a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

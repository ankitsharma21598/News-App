// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT-BwoWlWY-Ax3JI73HCwmKF8H-cgoGaE",
  authDomain: "triveous-82557.firebaseapp.com",
  projectId: "triveous-82557",
  storageBucket: "triveous-82557.appspot.com",
  messagingSenderId: "930897794415",
  appId: "1:930897794415:web:465d7f0a7b367d4a7c049a"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

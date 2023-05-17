import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYu_s6zu1SdMYjdSme1nbnR9ESoy8-E0k",
  authDomain: "react-auth-5dd93.firebaseapp.com",
  projectId: "react-auth-5dd93",
  storageBucket: "react-auth-5dd93.appspot.com",
  messagingSenderId: "215130671967",
  appId: "1:215130671967:web:9d21f39c9158e0657404ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

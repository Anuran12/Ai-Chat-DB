// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ai-chat-db.firebaseapp.com",
  projectId: "ai-chat-db",
  storageBucket: "ai-chat-db.firebasestorage.app",
  messagingSenderId: "1048013972146",
  appId: "1:1048013972146:web:cf667be2d38c4bb1411fab",
  measurementId: "G-2R5FPZZKB0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

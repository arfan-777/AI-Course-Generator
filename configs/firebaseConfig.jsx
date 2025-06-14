// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "sara-ai-544ef.firebaseapp.com",
  projectId: "sara-ai-544ef",
  storageBucket: "sara-ai-544ef.firebasestorage.app",
  messagingSenderId: "511487336289",
  appId: "1:511487336289:web:9f2e63f2cade5b5b48af20",
  measurementId: "G-VM0T8RMPNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
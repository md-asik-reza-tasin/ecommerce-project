// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Auth specific functions
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNRudZebh7EgXgPiZ1IoVezMmTevhrSAc",
  authDomain: "florra-auth.firebaseapp.com",
  projectId: "florra-auth",
  storageBucket: "florra-auth.firebasestorage.app",
  messagingSenderId: "523074343472",
  appId: "1:523074343472:web:c2003c43d7e83a3b1593f5",
  measurementId: "G-0Y61JF0KF8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// --- ADD THESE LINES ---
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// -----------------------

// Analytics check (prevents errors during SSR)
if (typeof window !== "undefined") {
  getAnalytics(app);
}
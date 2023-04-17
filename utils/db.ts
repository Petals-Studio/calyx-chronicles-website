import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAD2hh4CgolpbYdod0qg2kVgQCwTYsW6TM",
  authDomain: "petals-studio.firebaseapp.com",
  projectId: "petals-studio",
  storageBucket: "petals-studio.appspot.com",
  messagingSenderId: "389748617194",
  appId: "1:389748617194:web:df2778fd100735ce174c93",
  measurementId: "G-CRMBQQ8L73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAfxgef_qRdsrq9bjcdkErGr5B8YbVVFGg",
  authDomain: "petals-studio-dev.firebaseapp.com",
  projectId: "petals-studio-dev",
  storageBucket: "petals-studio-dev.appspot.com",
  messagingSenderId: "390614518223",
  appId: "1:390614518223:web:8dfd9ced354b2d79cbeaba",
  measurementId: "G-7FKGW1R69V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

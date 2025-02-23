// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mutual-mpl.firebaseapp.com",
  projectId: "mutual-mpl",
  storageBucket: "mutual-mpl.appspot.com",
  messagingSenderId: "62263380096",
  appId: "1:62263380096:web:d8b4e70672d9d30378fe65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

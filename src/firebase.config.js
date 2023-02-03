// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXixPh3kaBmOO6ocdYpWjDf3BU3h93_zo",
  authDomain: "food-recipe-857c7.firebaseapp.com",
  projectId: "food-recipe-857c7",
  storageBucket: "food-recipe-857c7.appspot.com",
  messagingSenderId: "38688271817",
  appId: "1:38688271817:web:ff5e9c8c474944a1c24c18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
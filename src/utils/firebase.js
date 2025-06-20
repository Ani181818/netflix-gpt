// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifqdumDEAWTIGI74rdDG2wdAfvLkwvPQ",
  authDomain: "netflixgpt-87893.firebaseapp.com",
  projectId: "netflixgpt-87893",
  storageBucket: "netflixgpt-87893.firebasestorage.app",
  messagingSenderId: "642313778175",
  appId: "1:642313778175:web:84e5db735d1154c354edca",
  measurementId: "G-PQENSL06HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
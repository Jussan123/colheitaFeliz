// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfQFXu9PnSJ9gVEKEkodvxyp0vWhVgWxQ",
  authDomain: "artmusic2-c2c5b.firebaseapp.com",
  projectId: "artmusic2-c2c5b",
  storageBucket: "artmusic2-c2c5b.appspot.com",
  messagingSenderId: "1058071147701",
  appId: "1:1058071147701:web:e4b5d445de6b7fe819bafc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCi_g_LcWdKXtggFYNVvhFjSKI8kpYh7y8",
  authDomain: "coder-app-corvino.firebaseapp.com",
  projectId: "coder-app-corvino",
  storageBucket: "coder-app-corvino.appspot.com",
  messagingSenderId: "83809140608",
  appId: "1:83809140608:web:5ed1e9df2bd7ff8d7dcb65"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
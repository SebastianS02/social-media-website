// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase';
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp4FMegOtOohvWCmV71LD16HRPed46CPg",
  authDomain: "solo-website-a59c2.firebaseapp.com",
  projectId: "solo-website-a59c2",
  storageBucket: "solo-website-a59c2.appspot.com",
  messagingSenderId: "193399239015",
  appId: "1:193399239015:web:f334ce55a8cdd5f330bfc2",
  measurementId: "G-7TS5EWENX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFireStore(app);
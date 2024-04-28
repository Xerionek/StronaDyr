// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuwmpBoz9oNPpCCqKog_B6nw5CPzY0aK8",
  authDomain: "stronadstkalisz.firebaseapp.com",
  projectId: "stronadstkalisz",
  storageBucket: "stronadstkalisz.appspot.com",
  messagingSenderId: "400562362914",
  appId: "1:400562362914:web:0c42950242ee3d9397c87b",
  measurementId: "G-1MZ28Y0WE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

const analytics = getAnalytics(app);
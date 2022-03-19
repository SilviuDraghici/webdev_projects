// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwixJil7AS4q0TAjJIgMr1VoSkOMZ2OMs",
  authDomain: "learningfullstack-6df15.firebaseapp.com",
  projectId: "learningfullstack-6df15",
  storageBucket: "learningfullstack-6df15.appspot.com",
  messagingSenderId: "974247863140",
  appId: "1:974247863140:web:c98cf70d3d856cc880d071",
  measurementId: "G-N1155TZEZH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

export default firebaseApp; 
export {auth, firestore};
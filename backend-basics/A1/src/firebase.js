// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";

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
const functions = getFunctions(firebaseApp);
const storage = getStorage();

if (window.location.hostname === "localhost") {
    console.log("Running on localhost.");
    
    console.log("Connecting to Firebase Auth emulator");
    connectAuthEmulator(auth, "http://localhost:9099");

    console.log("Connecting to Firestore emulator");
    connectFirestoreEmulator(firestore, 'localhost', 5002);

    console.log("Connecting to Cloud function emulator");
    connectFunctionsEmulator(functions, "localhost", 5001);

    console.log("Connecting to Storage emulator");
    connectStorageEmulator(storage, "localhost", 9199);
}


export default firebaseApp; 
export {auth, firestore, functions, storage};
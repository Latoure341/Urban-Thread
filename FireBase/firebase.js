// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2taejmrehvxtG9dFF78t1OBy0eoXVBw",
  authDomain: "urbanthreadsstore-906de.firebaseapp.com",
  projectId: "urbanthreadsstore-906de",
  storageBucket: "urbanthreadsstore-906de.firebasestorage.app",
  messagingSenderId: "885986960599",
  appId: "1:885986960599:web:2c785880440d8c1bc37c92",
  measurementId: "G-S48WN69VX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const authenticate = () => {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "../Login/login.html";
    }
  });
};
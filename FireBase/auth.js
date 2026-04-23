import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { auth } from "./firebase.js";

export const signup = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then(()=>{
    alert("Successfully Signed Up");
  })
  .catch((error)=>{
    alert(error);
  });
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then(()=>{
    alert("Logged In")
    localStorage.setItem("user", JSON.stringify(email));
  })
  .catch((error)=> {
    alert("Invalid");
  });
};

export const authenticate = () => {
   onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "../Login/login.html";
    }
  });
};
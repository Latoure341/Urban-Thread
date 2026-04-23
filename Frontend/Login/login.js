import { login } from "../../FireBase/auth.js";

const shopBtn = document.getElementById("shopBtn");
const signUp = document.querySelector(".signup");
const loginBtn = document.getElementById("loginBtn");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

signUp.addEventListener("click", ()=>{
     window.location.href = "../SignUp/signup.html"
})
shopBtn.addEventListener("click", ()=>{
     window.location.href = "../Shopping/shop.html"
})

loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const userCredential = await login(email, password);
    alert("User created:", userCredential);

    // Redirect after success
    window.location.href = "../Shopping/shop.html";
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
});
import { signup } from "../../FireBase/auth.js";

const login = document.querySelector(".login");
const backBtn = document.getElementById("loginBtn");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const signupBtn = document.getElementById("signupBtn");

// Navigation
login.addEventListener("click", () => {
  window.location.href = "../Login/login.html";
});

backBtn.addEventListener("click", () => {
  window.location.href = "../Login/login.html";
});

// Signup logic
signupBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Basic validation
  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const userCredential = await signup(email, password);

    // Redirect after success
    window.location.href = "../Login/login.html";
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
});
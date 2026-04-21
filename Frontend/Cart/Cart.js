import { getCart } from "./cartModule.js";

//Buttons for navigation
const checkoutBtn = document.getElementById("checkoutBtn");
const shopBtn = document.getElementById("shoppingBtn");
const shopNav = document.getElementById("shopNav");

const itemsContainer = document.querySelector(".items-container");

// Page Navigation with Event Listener
checkoutBtn.addEventListener("click", ()=>{
     window.location.href = "../Checkout/Checkout.html"
})
shopBtn.addEventListener("click", ()=>{
     window.location.href = "../Shopping/shop.html"
})
shopNav.addEventListener("click", ()=>{
     window.location.href = "../Shopping/shop.html"
})

function initializePage(){
     const cartItems =  getCart();
     
     if(cartItems.length !== 0){
          cartItems.forEach(item => {
               // Elements creation
               const itemSpan = document.createElement("span");
               itemSpan.classList.add("bg-dark", "d-flex", "text-white", "border-secondary", "border", "p-2");

               const itemImg = document.createElement("img");
               const itemDetails = document.createElement("span");
               itemDetails.classList.add("details", "p-2");

               const title = document.createElement("h4");
               const category = document.createElement("p");
               const price = document.createElement("h4");
               const quantity = document.createElement("p");
               const quantityInput = document.createElement("input");


          })
     }
}

// function execution
initializePage();
import { getCart, getCartCount, removeFromCart } from "./cartModule.js";

//Buttons for navigation
const checkoutBtn = document.getElementById("checkoutBtn");
const shopBtn = document.getElementById("shoppingBtn");
const shopNav = document.getElementById("shopNav");
const itemsContainer = document.querySelector(".items-container");

// Page Navigation with Event Listener

shopBtn.addEventListener("click", () => {
     window.location.href = "../Shopping/shop.html";
});
shopNav.addEventListener("click", () => {
     window.location.href = "../Shopping/shop.html";
});

function initializePage() {
     const cartItems = getCart();
     let subTotal = 0;
     const shippingPrice = 60;

     if (cartItems.length !== 0) {
          cartItems.forEach((item) => {
               // Elements creation
               const itemSpan = document.createElement("span");
               itemSpan.id = "item-container";
               itemSpan.classList.add(
                    "bg-dark",
                    "mt-4",
                    "d-flex",
                    "text-white",
                    "border-secondary",
                    "border",
                    "p-4",
               );

               const itemImg = document.createElement("img");
               itemImg.classList.add("productImg");
               itemImg.setAttribute("src", item.image);

               const itemDetails = document.createElement("span");
               itemDetails.classList.add("details", "p-2");

               const title = document.createElement("h4");
               title.innerHTML = item.name;

               const category = document.createElement("p");
               category.innerHTML = item.category;

               const price = document.createElement("h4");
               price.innerHTML = "R" + item.price;

               const quantity = document.createElement("p");
               quantity.textContent = "Quantity: 1";

               const quantityInput = document.createElement("input");
               quantityInput.setAttribute("type", "text");
               quantityInput.setAttribute("placeholder", "Enter the quantity");

               const deleteIcon = document.createElement("i");
               deleteIcon.classList.add("bi", "bi-trash3", "text-white", "m-2");

               // Append items
               itemDetails.appendChild(title);
               itemDetails.appendChild(category);
               itemDetails.appendChild(price);
               itemDetails.appendChild(quantity);

               itemSpan.appendChild(itemImg);
               itemSpan.appendChild(itemDetails);
               itemSpan.appendChild(deleteIcon);

               itemsContainer.appendChild(itemSpan);

               // Adding price tot eh subtotal
               subTotal = subTotal + item.price;

               // Removing item
               deleteIcon.addEventListener("click", ()=> {
                    removeFromCart(item.name);
                    location.reload();
               });
          });
          const itemCount = document.querySelector(".itemCount");
          itemCount.innerHTML = getCartCount();

          const tax = Math.floor((5 / 100) * subTotal);
          const totalPrice = shippingPrice + tax + subTotal;

          // Element selection and an update
          const subTotalEl = document.querySelector(".subTotal");
          subTotalEl.innerHTML = "R" + subTotal;

          const shippingEl = document.querySelector(".shippingFee");
          shippingEl.innerHTML = "R" + shippingPrice;

          const taxEl = document.querySelector(".taxFee");
          taxEl.innerHTML = "R" + tax;

          const totalEl = document.querySelector(".totalPrice");
          totalEl.innerHTML = "R" + totalPrice;

          // save info at the local storage
          checkoutBtn.addEventListener("click", () => {
               //Save info
               const prices = {
                    Subtotal: subTotal,
                    Shipping: shippingPrice,
                    Tax: tax,
                    Total: totalPrice,
               };
               localStorage.setItem("cartPrices", JSON.stringify(prices));
               window.location.href = "../Checkout/Checkout.html";
          });
     } else{
          const bigContainer = document.getElementById("big-container");
          const orderSummary = document.getElementById("order-summary");
          const emmptyCart = document.createElement("h1");
          emmptyCart.innerHTML = "Your Cart Is Empty";
          emmptyCart.classList.add("container-fluid", "d-flex", "Justify-content-center", "p-5", "fs-1")

          bigContainer.prepend(emmptyCart);
          orderSummary.classList.add("d-none");

     }
}

// function execution
initializePage();

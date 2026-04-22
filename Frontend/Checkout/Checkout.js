
const productDetails = document.querySelector(".productDetails");
const subtotal = document.querySelector(".subtotal");
const shipping = document.querySelector(".shipping");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");

const orderBtn = document.getElementById("OrderPlacement");
const cartBtn = document.getElementById("cartBtn");

orderBtn.addEventListener("click", ()=>{
    window.location.href = "../OrderSuccess/Order.html";
})

cartBtn.addEventListener("click", ()=>{
    localStorage.removeItem("cartPrices");
    window.location.href = "../Cart/cart.html";
})

const prices = JSON.parse(localStorage.getItem("cartPrices"));
const cartItems =  JSON.parse(localStorage.getItem("cart"))

//Rendering information
subtotal.innerHTML = "R" + prices.Subtotal;
shipping.innerHTML = "R" + prices.Shipping;
tax.innerHTML = "R" + prices.Tax;
total.innerHTML = "R" + prices.Total;

cartItems.forEach(item => {

    // Create Elements and Append them to productDetails
    const productSpan = document.createElement("span");
    const productName = document.createElement("p");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("d-flex", "justify-content-between", "align-items-center", "fw-bold")
    productName.innerHTML = item.name

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "R" + item.price;

    productSpan.appendChild(productName);
    containerDiv.appendChild(productSpan);
    containerDiv.appendChild(productPrice);
    productDetails.appendChild(containerDiv);
    
})

const orderBtn = document.getElementById("OrderPlacement");
const cartBtn = document.getElementById("cartBtn"); 

orderBtn.addEventListener("click", ()=>{
    window.location.href = "../OrderSuccess/Order.html";
})

cartBtn.addEventListener("click", ()=>{
    window.location.href = "../Cart/cart.html";
})
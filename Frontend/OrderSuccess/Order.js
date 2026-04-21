
const shopBtn = document.getElementById("shopBtn");
const homeBtn = document.getElementById("homeBtn");

//Page Navigation with Event Listening Event
shopBtn.addEventListener("click", ()=> {
    window.location.href = "../Shopping/shop.html";
})

homeBtn.addEventListener("click", ()=> {
    window.location.href = "../index.html";
})
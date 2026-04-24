import { fetchImages } from "../Firebase/database.js";

const shopBtn = document.getElementById("shoppingBtn");
const productBtn = document.getElementById("products");
const loader = document.querySelector(".loader");
const loaderContainer = document.querySelector(".loader-container");

// Select image containers
const imageContainer1 = document.querySelector(".image-container1");
const imageContainer2 = document.querySelector(".image-container2");
const imageContainer3 = document.querySelector(".image-container3");
const imageContainer4 = document.querySelector(".image-container4");

// Page Navigation using the Event Listeners
shopBtn.addEventListener("click", ()=>{
    window.location.href = "./Shopping/shop.html";
})

productBtn.addEventListener("click", ()=>{
    window.location.href = "./Shopping/shop.html";
})

function loadData() {
  loaderContainer.style.display = "block";

  setTimeout(() => {
    loaderContainer.style.display = "none";
  }, 2000);
}
window.addEventListener("load", loadData);

async function displayImages() {
    const images = await fetchImages();
    images.forEach(image => {

        const imageEl = document.createElement("img");
        imageEl.src = image.collectionImage1;
        imageEl.alt = "Hoodies";
        imageContainer1.prepend(imageEl);

        const imageEl2 = document.createElement("img");
        imageEl2.src = image.collectionImage2;
        imageEl2.alt = "T-Shirts";
        imageContainer2.prepend(imageEl2);

        const imageEl3 = document.createElement("img");
        imageEl3.src = image.collectionImage3;
        imageEl3.alt = "Pants";
        imageContainer3.prepend(imageEl3);

        const imageEl4 = document.createElement("img");
        imageEl4.src = image.streetWearImage;
        imageEl4.alt = "Streetwear";
        imageContainer4.prepend(imageEl4);

    })
}
loadData();
displayImages();
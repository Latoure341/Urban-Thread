import { fetchData } from "../../FireBase/database.js";

async function initShop() {
  try {
    const data = await fetchData();
    data.forEach((item) => {

      //Select elements from html file
      const productContainer = document.getElementById("product-container");
      productContainer.classList.add("product-grid");

      //Create Elements
      const productSpan = document.createElement("span");
      productSpan.classList.add("product-card");
      productSpan.style.padding = "2rem";

      const productImg = document.createElement("img");
      productImg.className = "product-image";
      productImg.style.height = "350px";

      const productDescription = document.createElement("div");
      // Inside div
      const contextSpan = document.createElement("span");
      contextSpan.classList.add("product-content");

      const heading = document.createElement("h3");
      heading.classList.add("product-title");
      const description = document.createElement("p");
      description.classList.add("product-desc");
      const price = document.createElement("p");
      price.textContent = "R ";
      price.classList.add("product-price");

      const cartBtn = document.createElement("button");
      cartBtn.classList.add("product-btn");
      const cartIcon = document.createElement("i");
      cartIcon.className = "bi bi-cart";
      cartBtn.textContent = "Add to Cart";

      //Append function
      function appendElements() {
        contextSpan.appendChild(heading);
        contextSpan.appendChild(description);
        contextSpan.appendChild(price);
        cartBtn.appendChild(cartIcon);
        productSpan.appendChild(productImg);
        productSpan.appendChild(productDescription);
        productContainer.appendChild(productSpan);
        productDescription.appendChild(contextSpan);
        productDescription.appendChild(cartBtn);
      }

      heading.innerHTML = item.name;
      description.innerHTML = item.Description;
      price.innerHTML = item.price;
      productImg.setAttribute("src", item.image);

      appendElements();

      console.log(price.innerHTML);
    });
  } catch (error) {
    console.error("Failed to fetch shop data:", error);
  }
}

initShop();

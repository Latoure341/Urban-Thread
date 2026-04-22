import { fetchData } from "../../FireBase/database.js";
import { addToCart, getCartCount } from "../Cart/cartModule.js";

const countElement = document.querySelector(".productCount");
const productNumber = document.querySelector(".productNumb");

// Product count
let productCount = 0;
let cartProducts = 0;

// Filter buttons selection
const allProductsBtn = document.querySelector(".all-products");
const hoodiesBtn = document.querySelector(".hoodiesBtn");
const tShirtsBtn = document.querySelector(".t-shirtsBtn");
const PantsBtn = document.querySelector(".PantsBtn"); 

const buttonList = [hoodiesBtn, tShirtsBtn, PantsBtn];

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
      productSpan.dataset.category = item.category || "";
      price.innerHTML = item.price;
      productImg.setAttribute("src", item.image);
    

      appendElements();

      // Adding product to cart
      cartBtn.addEventListener("click", ()=> {
        addToCart(item);
        cartProducts = getCartCount();
        productNumber.innerHTML = cartProducts;
        
      })
      

    });
    countElement.innerHTML = productCount;
    
    // Filtering the products
    function updateButtonStyles(activeBtn) {
      const allButtons = [allProductsBtn, ...buttonList];
      allButtons.forEach(btn => {
        if (btn === activeBtn) {
          btn.classList.remove("btn-dark", "bg-black");
          btn.classList.add("btn-light");
        } else {
          btn.classList.add("btn-dark", "bg-black");
          btn.classList.remove("btn-light");
        }
      });
    }

    function filterProducts(category) {
      const productCards = document.querySelectorAll(".product-card");
      let visibleCount = 0;

      productCards.forEach(card => {
        const isMatch = category === "All Products" || card.dataset.category === category;
        card.style.display = isMatch ? "" : "none";
        if (isMatch) visibleCount += 1;
      });

      countElement.innerHTML = visibleCount;
    }

    buttonList.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.textContent.trim();
        filterProducts(category);
        updateButtonStyles(button);
      });
    });

    allProductsBtn.addEventListener("click", () => {
      filterProducts("All Products");
      updateButtonStyles(allProductsBtn);
    });

    // Page Navigation EventListenera
    const cart = document.querySelector(".cart");
    const login = document.getElementById("login");
    
    cart.addEventListener("click", ()=> {
      //Navigate to cart page
      window.location.href = "../Cart/cart.html"
    })
    login.addEventListener("click", ()=> {
      //Navigate to cart page
      window.location.href = "../Login/login.html"
    })

  } catch (error) {
    console.error("Failed to fetch shop data:", error);
  }
}


//function execution
initShop();

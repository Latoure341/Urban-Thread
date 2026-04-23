
const STORAGE_KEY = "cart";
let cart = JSON.parse(localStorage.getItem('cart'));
if(cart === null){
  cart = [];
}

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem(STORAGE_KEY);
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch (e) {
      console.error("Error parsing cart from localStorage:", e);
      return [];
    }
  }
  return [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Add item to cart
function addToCart(item) {
  cart.push(item);
  saveCart(cart);
}

// Remove item (optional)
function removeFromCart(name) {
  const cart = getCart();
  const remainingItems = cart.filter(item => item.name != name);
  saveCart(remainingItems);
}

// Get total count
function getCartCount() {
  return getCart().length;
}

export { addToCart, getCart, getCartCount, removeFromCart };
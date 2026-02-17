
const cartCount = document.getElementById("cart-count");

// Load existing cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

// ⭐ Update Cart Counter
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// ⭐ Add From Home Page
function addToCartHome(title, price) {

  const product = {
    title: title,
    price: price
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

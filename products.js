




const container = document.getElementById("all-products");
const cartCount = document.getElementById("cart-count");

let allProducts = [];
let cart = [];

// ⭐ Display Products
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {

    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <img src="${product.image}" class="h-40 mx-auto object-contain mb-4">
      <h3 class="font-semibold text-sm mb-2">
        ${product.title}
      </h3>
      <p class="text-indigo-600 font-bold mb-3">
        $${product.price}
      </p>
      <button onclick="addToCart(${product.id})"
              class="bg-indigo-600 text-white w-full py-2 rounded-md">
        Add to Cart
      </button>
    `;

    container.appendChild(div);
  });
}

// ⭐ Add To Cart
function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
}

// ⭐ Load All
function loadProducts() {
  displayProducts(allProducts);
}

// ⭐ Filter
function filterCategory(category) {
  const filtered = allProducts.filter(product =>
    product.category === category
  );
  displayProducts(filtered);
}

// ⭐ Fetch API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch(err => console.log(err));

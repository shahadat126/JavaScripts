const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Display products
function displayProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="mb-2 w-full h-60 object-cover rounded">
      <h3 class="text-lg font-bold">${product.name}</h3>
      <p class="text-sm text-gray-600">${product.description}</p>
      <p class="font-semibold">$${product.price}</p>
      <button onclick="addToCart(${product.id})" class="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Update cart UI
function updateCartUI() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center mb-2";
    div.innerHTML = `
      <div>
        <p>${item.name} ($${item.price})</p>
        <input type="number" min="1" value="${item.quantity}" class="border w-16 text-center"
          onchange="updateQuantity(${item.id}, this.value)">
      </div>
      <p>$${item.price * item.quantity}</p>
    `;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = calculateTotal();
}

// Modal controls
document.getElementById("cartBtn").onclick = () => cartModal.classList.remove("hidden");
document.getElementById("closeCart").onclick = () => cartModal.classList.add("hidden");
document.getElementById("clearCart").onclick = clearCart;
document.getElementById("checkout").onclick = () => alert("Checkout complete!");

// Init
displayProducts();

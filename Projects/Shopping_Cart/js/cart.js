// let cart = [];

// // Add product to cart
// function addToCart(productId) {
//   const product = products.find(p => p.id === productId);
//   const cartItem = cart.find(item => item.id === productId);

//   if (cartItem) {
//     cartItem.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
//   updateCartUI();
// }

// // Update quantity
// function updateQuantity(productId, newQty) {
//   newQty = parseInt(newQty);
//   if (isNaN(newQty) || newQty <= 0) {
//     cart = cart.filter(item => item.id !== productId);
//   } else {
//     const item = cart.find(p => p.id === productId);
//     if (item) item.quantity = newQty;
//   }
//   updateCartUI();
// }

// // Clear Cart
// function clearCart() {
//   cart = [];
//   updateCartUI();
// }

// // Calculate total
// function calculateTotal() {
//   return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// }

let cart = [];
let appliedPromo = null; // একবারের বেশি ব্যবহার না করার জন্য

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

// Update quantity
function updateQuantity(productId, newQty) {
  newQty = parseInt(newQty);
  if (isNaN(newQty) || newQty <= 0) {
    cart = cart.filter(item => item.id !== productId);
  } else {
    const item = cart.find(p => p.id === productId);
    if (item) item.quantity = newQty;
  }
  updateCartUI();
}

// Clear Cart
function clearCart() {
  cart = [];
  appliedPromo = null; // clear করলে promo code রিসেট হবে
  document.getElementById("promo-message").textContent = "";
  updateCartUI();
}

// Calculate total
function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // যদি promo code আগে apply করা হয়ে থাকে
  if (appliedPromo === "ostad10") {
    total = total - total * 0.1;
  } else if (appliedPromo === "ostad50") {
    total = total - total * 0.5;
  }

  return total;
}

// Apply Promo Code
function applyPromo() {
  const code = document.getElementById("promo-code").value.trim();
  const messageEl = document.getElementById("promo-message");

  if (appliedPromo) {
    messageEl.textContent = "Promo code already applied!";
    return;
  }

  if (code === "ostad10" || code === "ostad50") {
    appliedPromo = code;
    messageEl.textContent = `Promo code applied: ${code}`;
    messageEl.classList.remove("text-red-500");
    messageEl.classList.add("text-green-500");
  } else {
    messageEl.textContent = "Invalid Promo Code";
    messageEl.classList.remove("text-green-500");
    messageEl.classList.add("text-red-500");
  }

  updateCartUI();
}

// Event Listener
document.getElementById("apply-promo").addEventListener("click", applyPromo);
document.getElementById("clearCart").addEventListener("click", clearCart);

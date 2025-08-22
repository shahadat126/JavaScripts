let cart = [];

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
  updateCartUI();
}

// Calculate total
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

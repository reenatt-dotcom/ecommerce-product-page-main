// Retrieve cart items from localStorage
function getCartItems() {
  let cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
}

// Store cart items in localStorage
function storeCartItems(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Add selected quantity to cart
function addToCart() {
  const quantityInput = document.getElementById('quantity-input');
  const quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    const productId = 1; // Assuming the product ID is 1 for this example
    const cartItem = {
      id: productId,
      quantity: quantity,
    };

    // Retrieve existing cart items from localStorage
    let cartItems = getCartItems();

    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      // Update the quantity if the product already exists in the cart
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add the new product to the cart
      cartItems.push(cartItem);
    }

    // Store the updated cart items in localStorage
    storeCartItems(cartItems);

    // Provide feedback or redirect to the cart page
    alert(`Added ${quantity} pairs to the cart.`);
  } else {
    alert('Please select a valid quantity.');
  }
}

// Increment button click event handler
document.getElementById('increment-btn').addEventListener('click', function () {
  const quantityInput = document.getElementById('quantity-input');
  let quantity = parseInt(quantityInput.value);

  if (!isNaN(quantity)) {
    quantity++;
    quantityInput.value = quantity;
  }
});

// Decrement button click event handler
document.getElementById('decrement-btn').addEventListener('click', function () {
  const quantityInput = document.getElementById('quantity-input');
  let quantity = parseInt(quantityInput.value);

  if (!isNaN(quantity) && quantity > 0) {
    quantity--;
    quantityInput.value = quantity;
  }
});

// Add to cart button click event handler
document.querySelector('.add-to-cart-btn').addEventListener('click', addToCart);

// Display cart contents on cart.html
function displayCart() {
  const cartItems = getCartItems();
  const cartContainer = document.querySelector('main');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<h2>Your Cart</h2><p>Your cart is currently empty.</p>';
  } else {
    let cartHTML = '<h2>Your Cart</h2><ul>';

    for (const item of cartItems) {
      cartHTML += `<li>Product ID: ${item.id}, Quantity: ${item.quantity}</li>`;
    }

    cartHTML += '</ul>';
    cartContainer.innerHTML = cartHTML;
  }
}

// Run displayCart when cart.html is loaded
if (window.location.pathname.includes('cart.html')) {
  displayCart();
}

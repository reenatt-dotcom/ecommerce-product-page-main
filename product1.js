// Retrieve cart items from localStorage
function getCartItems() {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}


// Store cart items in localStorage
function storeCartItems(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


// Add selected quantity to cart
function addToCart(quantity) {
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
}


// Display cart contents on cart.html
function displayCart() {
  const cartItems = getCartItems();
  const cartContainer = document.getElementById('cart-container');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    let cartHTML = '<ul>';

    for (const item of cartItems) {
      const product = getProductById(item.id);
      const totalPrice = product.price * item.quantity;

      cartHTML += `
        <li>
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" class="cart-item-image">
          </div>
          <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-quantity">Quantity: ${item.quantity}</p>
            <p class="product-total-price">Total: $${totalPrice.toFixed(2)}</p>
          </div>
        </li>
      `;
    }

    cartHTML += '</ul>';
    cartContainer.innerHTML = cartHTML;
  }
}




// Retrieve the product title based on its ID
function getProductTitle(productId) {
  // Replace this with your implementation to fetch the product title based on the ID
  // For example, you can have a predefined array or object that maps product IDs to titles

  // Example implementation using a product map
  const productMap = {
    1: 'Stylish High Heels',
    2: 'Elegant Pumps',
    // Add more mappings for other product IDs
  };

  // Return the title based on the product ID
  return productMap[productId] || 'Unknown Product';
}


// Retrieve the product price based on its ID
function getProductPrice(productId) {
  let price = 0;

  // Replace the switch statement with your own logic to retrieve the product price
  switch (productId) {
    case 1:
      price = 125.00;
      break;
    case 2:
      price = 99.00;
      break;
    // Add more cases for other product IDs

    default:
      price = 0;
  }

  return price;
}


// Retrieve the product image based on its ID
function getProductImage(productId) {
  let imageUrl = '';

  // Replace the switch statement with your own logic to retrieve the product image URL
  switch (productId) {
    case 1:
      imageUrl = 'images/shoe1/1.webp';
      break;
    case 2:
      imageUrl = 'images/shoe2/1.webp';
      break;
    // Add more cases for other product IDs

    default:
      imageUrl = '';
  }

  return imageUrl;
}
// Get product details by ID
function getProductById(productId) {
  // Replace the code below with your actual implementation
  // Here, we are returning some example data
  const products = [
    { id: 1, title: 'Stylish High Heels', price: 125, image: 'images/shoe1/1.webp' },
    { id: 2, title: 'Elegant Pumps', price: 99, image: 'images/shoe2/1.webp' },
    // Add more products as needed
  ];

  return products.find(product => product.id === productId);
}

function handleQuantityChange(increment) {
  const quantityInput = document.getElementById('quantity-input');
  let quantity = parseInt(quantityInput.value);

  if (increment) {
    quantity += 1;
  } else {
    if (quantity > 0) {
      quantity -= 1;
    }
  }

  quantityInput.value = quantity;
}

// Attach event listeners to the increment and decrement buttons
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', function() {
  handleQuantityChange(true);
});

decrementBtn.addEventListener('click', function() {
  handleQuantityChange(false);
});

function addToCart(quantity) {
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

  // Provide feedback to the user
  alert(`Added ${quantity} pairs to the cart.`);
}

// Get the "Add to Cart" button element
const addToCartBtn = document.querySelector('.add-to-cart-btn');

// Add an event listener to the button
addToCartBtn.addEventListener('click', function() {
  // Retrieve the quantity input element
  const quantityInput = document.getElementById('quantity-input');
  
  // Retrieve the selected quantity
  const quantity = parseInt(quantityInput.value);
  
  // Call the addToCart function with the selected quantity
  addToCart(quantity);
});

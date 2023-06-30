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
    const productId = 3; // Assuming the product ID is 2 for Elegant Pumps
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
      3: 'Classic Stilettos',
      4: 'Comfortable Wedges',
      5: 'Fashionable Sandals',
      6: 'Chic Boots',
      7: 'Sporty Sneakers',
      8: 'Casual Flats',
      9: 'Ankle Strap Heels',
      10: 'Mary Janes',
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
      case 3:
        price = 149.00;
        break;
      case 4:
        price = 79.00;
        break;
      case 5:
        price = 69.00;
        break;
      case 6:
        price = 159.00;
        break;
      case 7:
        price = 89.00;
        break;
      case 8:
        price = 59.00;
        break;
      case 9:
        price = 109.00;
        break;
      case 10:
        price = 79.00;
        break;
      // Add more cases for other product IDs
  
      default:
        price = 0.00;
    }
  
    return price;
  }
  
  // Retrieve the product image URL based on its ID
  function getProductImage(productId) {
    let imageUrl = '';
  
    // Replace the switch statement with your own logic to retrieve the product image URL
    switch (productId) {
      case 1:
        imageUrl = 'images/shoe1/1.webp';
        break;
      case 2:
        imageUrl = 'images/shoe2/1.jpg';
        break;
      case 3:
        imageUrl = 'images/shoe3/1.png';
        break;
      case 4:
        imageUrl = 'images/shoe4/1.jpg';
        break;
      case 5:
        imageUrl = 'images/shoe5/1.png';
        break;
      case 6:
        imageUrl = 'images/shoe6/1.webp';
        break;
      case 7:
        imageUrl = 'images/shoe7/image-product-1-thumbnail.jpg';
        break;
      case 8:
        imageUrl = 'images/shoe8/1.webp';
        break;
      case 9:
        imageUrl = 'images/shoe9/1.png';
        break;
      case 10:
        imageUrl = 'images/shoe10/1.jpg';
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
    const product = {
      id: productId,
      title: getProductTitle(productId),
      price: getProductPrice(productId),
      image: getProductImage(productId),
    };
  
    return product;
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
  
    quantityInput.value = quantity.toString();
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
  
  
  
  // Get the "Add to Cart" button element
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  // Add an event listener to the button
  addToCartBtn.addEventListener('click', function () {
    // Retrieve the quantity input element
    const quantityInput = document.getElementById('quantity-input');
  
    // Retrieve the selected quantity
    const quantity = parseInt(quantityInput.value);
  
    // Call the addToCart function with the selected quantity
    addToCart(quantity);
  });
  
  // Display the initial product image
  changeImage('images/shoe3/1.png');
  
  function changeImage(imageUrl) {
    // Get the main image element
    const mainImage = document.getElementById('mainImage');
  
    // Change the source of the main image
    mainImage.src = imageUrl;
  }
  
  
  // Get the thumbnail images
  const thumbnailImages = document.querySelectorAll('.thumbnail');
  
  // Add an event listener to each thumbnail image
  thumbnailImages.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      // Get the URL of the clicked thumbnail image
      const imageUrl = thumbnail.src;
  
      // Call the changeImage function with the URL of the clicked image
      changeImage(imageUrl);
    });
  });
  
  // Call the displayCart function to show the cart contents on the cart.html page
  displayCart();
  
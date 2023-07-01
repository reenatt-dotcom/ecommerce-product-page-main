function getCartItems() {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}


function storeCartItems(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


function addToCart(quantity) {
  const productId = 1;
  const cartItem = {
    id: productId,
    quantity: quantity,
  };


  let cartItems = getCartItems();


 
  const existingItemIndex = cartItems.findIndex(item => item.id === productId);
  if (existingItemIndex !== -1) {
   
    cartItems[existingItemIndex].quantity += quantity;
  } else {
   
    cartItems.push(cartItem);
  }


 
  storeCartItems(cartItems);


 
  alert(`Added ${quantity} pairs to the cart.`);
}


function displayCart() {
  const cartItems = getCartItems();
  const cartContainer = document.getElementById('cart-container');
  const checkoutButton = document.createElement('button');
  checkoutButton.textContent = 'Checkout';
  checkoutButton.classList.add('checkout-button');
  checkoutButton.addEventListener('click', () => {
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
  });

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    let cartHTML = '<ul>';

    let totalPrice = 0; // Variable to store the total price

    for (const item of cartItems) {
      const product = getProductById(item.id);
      const itemPrice = product.price * item.quantity;
      totalPrice += itemPrice; // Update the total price

      cartHTML += `
        <li>
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" class="cart-item-image">
          </div>
          <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-quantity">Quantity: ${item.quantity}</p>
            <p class="product-total-price">Total: $${itemPrice.toFixed(2)}</p>
            <button class="remove-from-cart-btn" data-product-id="${product.id}">Remove</button>
          </div>
        </li>
      `;
    }

    cartHTML += '</ul>';
    cartContainer.innerHTML = cartHTML;

    // Append the total price and checkout button
    const totalContainer = document.createElement('div');
    totalContainer.classList.add('cart-total');
    totalContainer.innerHTML = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
    totalContainer.appendChild(checkoutButton);
    cartContainer.appendChild(totalContainer);

    // Add event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-product-id'));
        removeFromCart(productId);
      });
    });
  }
}


function removeFromCart(productId) {
  let cartItems = getCartItems();

  // Find the index of the item in the cart
  const itemIndex = cartItems.findIndex(item => item.id === productId);

  if (itemIndex !== -1) {
    const currentItem = cartItems[itemIndex];

    if (currentItem.quantity > 1) {
      // If there is more than one instance of the item, decrement the quantity by one
      currentItem.quantity -= 1;
    } else {
      // If there is only one instance of the item, remove it from the cart
      cartItems.splice(itemIndex, 1);
    }

    // Update the cart in local storage
    storeCartItems(cartItems);

    // Refresh the cart display
    displayCart();

    alert('Item removed from cart.');
  }
}




function getProductTitle(productId) {
 
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
   
  };


 
  return productMap[productId] || 'Unknown Product';
}


function getProductPrice(productId) {
  let price = 0;


 
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
   


    default:
      price = 0.00;
  }


  return price;
}


function getProductImage(productId) {
  let imageUrl = '';


 
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
   


    default:
      imageUrl = '';
  }


  return imageUrl;
}


function getProductById(productId) {
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


const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');




incrementBtn.addEventListener('click', function() {
  handleQuantityChange(true);
});


decrementBtn.addEventListener('click', function() {
  handleQuantityChange(false);
});


const addToCartBtn = document.querySelector('.add-to-cart-btn');


addToCartBtn.addEventListener('click', function () {
 
  const quantityInput = document.getElementById('quantity-input');


 
  const quantity = parseInt(quantityInput.value);


 
  addToCart(quantity);
});


changeImage('images/shoe1/1.webp');


function changeImage(imageUrl) {
 
  const mainImage = document.getElementById('mainImage');


 
  mainImage.src = imageUrl;
}




const thumbnailImages = document.querySelectorAll('.thumbnail');




thumbnailImages.forEach(function (thumbnail) {
  thumbnail.addEventListener('click', function () {
   
    const imageUrl = thumbnail.src;


   
    changeImage(imageUrl);
  });
});




displayCart();
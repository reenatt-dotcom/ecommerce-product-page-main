function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
  }
  // Get references to the input and buttons
const quantityInput = document.getElementById('quantity-input');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');

// Set the initial quantity
let quantity = 0;
quantityInput.value = quantity;

// Add event listeners to the buttons
decrementBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityInput.value = quantity;
  }
});

incrementBtn.addEventListener('click', () => {
  quantity++;
  quantityInput.value = quantity;
});

// Image changer functionality
function changeImage(imageUrl) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = imageUrl;
}

// Incrementer functionality
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const quantityInput = document.getElementById('quantity-input');

decrementBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 0) {
    quantity--;
  } else {
    quantity = 0;
  }
  quantityInput.value = quantity.toString();
});

incrementBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity.toString();
});

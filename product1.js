// Incrementer functionality
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const quantityInput = document.getElementById("quantity-input");

decrementBtn.addEventListener("click", decrementQuantity);
incrementBtn.addEventListener("click", incrementQuantity);

function decrementQuantity() {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 0) {
    quantity--;
    quantityInput.value = quantity;
  }
}

function incrementQuantity() {
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
}

// Add to cart functionality
const addToCartBtn = document.querySelector(".add-to-cart-btn");

addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
  const productId = parseInt(document.querySelector(".product-info").getAttribute("data-product-id"));
  const quantity = parseInt(quantityInput.value);
  // Add the product and quantity to the cart (you can replace this code with your own implementation)
  console.log("Product ID:", productId);
  console.log("Quantity:", quantity);
}

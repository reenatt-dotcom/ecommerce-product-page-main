// Fetch shoe data from JSON file
fetch('shoes.json')
  .then(response => response.json())
  .then(data => {
    const shoes = data.shoes;
    displayShoes(shoes);
  })
  .catch(error => console.log(error));

// Display shoes on the page
function displayShoes(shoes) {
  const productContainer = document.querySelector('.product-list');

  shoes.forEach(shoe => {
    const productItem = createProductItem(shoe);
    productContainer.appendChild(productItem);
  });
}

// Create product item element
function createProductItem(shoe) {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');

  const image = document.createElement('img');
  image.src = shoe.image;
  image.alt = shoe.name;

  const title = document.createElement('h3');
  title.textContent = shoe.name;

  const price = document.createElement('p');
  price.textContent = `$${shoe.price.toFixed(2)}`;

  productItem.appendChild(image);
  productItem.appendChild(title);
  productItem.appendChild(price);

  return productItem;
}

// Fetch the shoe data from the JSON file
fetch('shoes.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.querySelector('.product-list');

    // Loop through each shoe and create HTML elements to display them
    data.shoes.forEach(shoe => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const image = document.createElement('img');
      image.src = shoe.image;
      image.alt = shoe.name;
      productItem.appendChild(image);

      const productName = document.createElement('h3');
      productName.textContent = shoe.name;
      productItem.appendChild(productName);

      const productPrice = document.createElement('p');
      productPrice.textContent = `$${shoe.price.toFixed(2)}`;
      productItem.appendChild(productPrice);

      productContainer.appendChild(productItem);
    });
  })
  .catch(error => console.error(error));

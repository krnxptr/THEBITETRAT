let cartItems = [];


function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
    updateOrderForm(); // Add this line to update the order form
}

function updateCart() {
    const cartList = document.getElementById('cart-items');

    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });
    const checkoutButton = document.querySelector('#cart button');
    checkoutButton.textContent = `Checkout - Total: $${totalPrice}`;
}

function checkout() {
    document.getElementById('menuPage').style.display = 'none';
    document.querySelector('footer').style.display='none';
    document.getElementById('orderFormContainer').style.display = 'block';
    document.getElementById('cart').style.display = 'none';

    // Append orders.css to the head section
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'orders.css';
    document.head.appendChild(link);

    // Remove script.js
    var script = document.getElementById('script');
    script.parentNode.removeChild(script);

    // Add orders.js
    var ordersScript = document.getElementById('orders(1)');
    ordersScript.removeAttribute('defer');

    // Reset cart items
    cartItems = [];
    updateCart();
}

// Add this function to update the order form
function updateOrderForm() {
    const orderFormCartItems = document.getElementById('orderFormCartItems');
    let totalyPrice = 0;
    orderFormCartItems.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderFormCartItems.appendChild(listItem);
        totalyPrice += item.price;
    });
    const totalPriceElement = document.querySelector('#price');
    totalPriceElement.textContent = `Total Price: $${totalyPrice}`;
}


document.getElementById('addToCartBtn').addEventListener('click', function() {
    
    selectedFood = document.getElementById('maindish').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('garnishes').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('salads').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('sauces').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('deserts').value;
    cartItems.push(selectedFood);
    selectedFood = document.getElementById('drinks').value;
    cartItems.push(selectedFood);
    
    updateCartItems();
});
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  updateCart();
  updateOrderForm(); // Add this line to update the order form
}

function updateCartItems() {
  const cartItemsElement = document.getElementById('cart-items-order-form');
  cartItemsElement.innerHTML = ''; // Clear the existing content
  
  cartItems.forEach((item, index) => {
      const itemElement = document.createElement('li');
      const itemText = document.createTextNode(`${item.name} - $${item.price}`); // Create text node
      itemElement.appendChild(itemText); // Append text node to list item
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => {
          cartItems.splice(index, 1);
          updateCartItems();
      });
      
      itemElement.appendChild(deleteButton);
      cartItemsElement.appendChild(itemElement);
  });
}



/* 
    document.getElementById('foodItem').addEventListener('change', function() {
        const selectedFood = this.value;
    }); */

//cart elements
document.getElementById('maindish').addEventListener('change', function() {
    const selectedFood = this.value;
});

/* const cartItems = [];

    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const selectedFood = document.getElementById('foodItem').value;
        cartItems.push(selectedFood);
        
        updateCartItems();
    });

    function updateCartItems() {
        const cartItemsElement = document.getElementById('cartItems');
        cartItemsElement.innerHTML = '<h2>Cart Items:</h2>';
        
        cartItems.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = item;
            cartItemsElement.appendChild(itemElement);
        });
    } */

 /*    //cart button
    var iconElement = document.createElement("i");
  iconElement.className = "fa-solid fa-cart-shopping";
  document.getElementById("addToCartBtn").appendChild(iconElement); */



  //creditcard
  // Get all card checkboxes
const cardCheckboxes = document.querySelectorAll('.card-checkbox');
const submitBtn = document.getElementById('submitBtn');
const selectedCardsDiv = document.getElementById('selectedCards');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get selected card options
  const selectedCards = [];
  cardCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedCards.push(checkbox.value);
    }
  });

  // Display selected cards
  selectedCardsDiv.innerHTML = `Selected cards: ${selectedCards.join(', ')}`;
}

// Add event listener for form submission
submitBtn.addEventListener('click', handleSubmit);

//credit card number 

  // Function to validate the credit card number
function validateCreditCardNumber(creditCardNumber) {
    // Remove non-numeric characters from the input
    creditCardNumber = creditCardNumber.replace(/\D/g, '');
    
    // Check if the input is a 16-digit number
    if (/^\d{16}$/.test(creditCardNumber)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Function to format the credit card number
  function formatCreditCardNumber(creditCardNumber) {
    // Insert spaces every 4 digits for better readability
    return creditCardNumber.match(/.{1,4}/g).join(' ');
  }
  
  // Event listener for the form submission
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the credit card number input
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    
    // Validate the credit card number
    if (validateCreditCardNumber(creditCardNumber)) {
      // Format and display the credit card number
      const formattedCreditCardNumber = formatCreditCardNumber(creditCardNumber);
      alert(`Your credit card number is: ${formattedCreditCardNumber}`);
    } else {
      alert('Please enter a valid 16-digit credit card number.');
    }
  });


  //hover text

  // Get the text elements and photo elements
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const photo1 = document.getElementById('photo1');
const photo2 = document.getElementById('photo2');

// Add mouseover event listeners for text1
text1.addEventListener('mouseover', function() {
  photo1.style.display = 'block';
  photo2.style.display = 'none';
});

// Add mouseover event listeners for text2
/* text2.addEventListener('mouseover', function() {
  photo1.style.display = 'none';
  photo2.style.display = 'block';
}); */


  //delete items

function updateCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '<h2>Cart Items:</h2>';
    
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => {
            cartItems.splice(index, 1);
            updateCartItems();
        });
        
        itemElement.appendChild(deleteButton);
        cartItemsElement.appendChild(itemElement);
    });
}


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

    orderFormCartItems.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderFormCartItems.appendChild(listItem);
    });
}

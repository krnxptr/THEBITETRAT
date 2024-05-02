


let cartItems = [];

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
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
    // Here you can implement payment processing logic, e.g., using a payment gateway API
    alert('Redirecting to payment page...');
    // After successful payment, you can clear the cartItems array and update the cart display
    cartItems = [];
    updateCart();
}

const products = document.querySelectorAll('.product');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const clearCartButton = document.getElementById('clear-cart');

let cart = [];

function addToCart(productIndex) {
    const product = products[productIndex];
    const name = product.querySelector('h2').textContent;
    const price = parseFloat(product.querySelector('p').textContent.slice(8));
    
    const existingCartItem = cart.find(item => item.name === name);
    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${item.price * item.quantity}</span>
            <button class="remove-item">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCartDisplay();
        });
    });
}

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index);
        updateCartDisplay();
    });
});

clearCartButton.addEventListener('click', () => {
    cart = [];
    updateCartDisplay();
});



updateCartDisplay();

function scrollToServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

function addToCart(itemName, itemPrice) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    cart.push({ name: itemName, price: itemPrice });

    
    localStorage.setItem("cart", JSON.stringify(cart));

    
    alert(`${itemName} has been added to your cart for ₱${itemPrice.toFixed(2)}.`);
}

function redirectToLearnMore() {
    window.location.href = 'learn_more.html';
}


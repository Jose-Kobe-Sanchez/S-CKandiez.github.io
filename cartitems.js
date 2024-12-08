document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const totalAmount = document.getElementById("total-amount");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        totalAmount.textContent = "Total: ₱0.00";
    } else {
        let total = 0;
        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);

            total += item.price;
        });

        totalAmount.textContent = `Total: ₱${total.toFixed(2)}`;
    }
});

function clearCart() {
    localStorage.removeItem("cart");
    alert("Cart cleared!");
    location.reload();
}

function placeOrder() {
    alert("Your order has been placed!");
    clearCart();
}

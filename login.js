document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    
    const account = accounts.find(
        account => account.username === username && account.password === password
    );

    if (account) {
        alert(`Welcome, ${username}!`);
        window.location.href = "home.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

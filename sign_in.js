const signupForm = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const signupError = document.getElementById("signupError");


function getAccounts() {
    return JSON.parse(localStorage.getItem("accounts")) || [];
}


function saveAccounts(accounts) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}


signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const accounts = getAccounts();

    
    if (accounts.some(account => account.username === username)) {
        displayError("Username already exists. Please choose a different username.");
        return;
    }

    if (accounts.some(account => account.email === email)) {
        displayError("Email already exists. Please use a different email.");
        return;
    }

    
    if (password !== confirmPassword) {
        displayError("Passwords do not match. Please try again.");
        return;
    }

    
    accounts.push({ username, email, password });
    saveAccounts(accounts);

    alert("Sign-up successful!");
    resetForm();
    window.location.href = "login.html"; 
});

function displayError(message) {
    signupError.textContent = message;
    signupError.style.display = "block";
}

function resetForm() {
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    signupError.style.display = "none";
}

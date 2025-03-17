function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("signup-tab").classList.remove("active");
}

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signup-tab").classList.add("active");
    document.getElementById("login-tab").classList.remove("active");
}

function togglePassword(inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Redirect to index.html after successful login
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login-form form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        window.location.href = "/"; // Redirect to home page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const togglePassword = document.getElementById("togglePassword");
    const facebookLogin = document.querySelector(".facebook");
    const linkedinLogin = document.querySelector(".linkedin");

    // Show full website after login with delay and pop-up
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            localStorage.setItem("isLoggedIn", "true"); // Store login status

            // Delay redirection by 5-6 seconds
            setTimeout(function () {
                window.location.href = "index.html"; // Redirect to the main website
            }, 5000); // 5000ms = 5 seconds
        } else {
            alert("Please enter a valid email and password!");
        }
    });

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.replace("uil-eye", "uil-eye-slash");
        }
    });

    // Facebook Login
    facebookLogin.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/";
    });

    // LinkedIn Login
    linkedinLogin.addEventListener("click", function () {
        window.location.href = "https://www.google.com/"; // Change to LinkedIn URL if needed
    });

    // Restrict access to full website if not logged in
    if (window.location.pathname.includes("full-website.html") && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html"; // Redirect back to login page
    }
});

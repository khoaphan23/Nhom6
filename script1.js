document.getElementById("loginForm1").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    const errorMessage = document.getElementById("error-message1");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Invalid email address.";
        return;
    }

    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must start with an uppercase letter, contain a number, a special character, and be at least 8 characters.";
        return;
    }

    errorMessage.textContent = "Login successful!";
});

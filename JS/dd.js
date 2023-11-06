const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = document.querySelector("#username");
    const confirmInput = document.querySelector("#confirm");
    const mailInput = document.querySelector("#mail");
    const passwordInput = document.querySelector("#password");

    const username = usernameInput.value.trim();
    const confirm = confirmInput.value.trim();
    const mail = mailInput.value.trim();
    const password = passwordInput.value.trim();

    // Add validation logic for username, email, and password (similar to what you did for login)

    if (/* Validation checks */) {
        // Handle invalid data and show error messages
        return;
    }

    // If data is valid, you can save the user information to your server or wherever you want

    // Redirect to a success page or perform other actions
});

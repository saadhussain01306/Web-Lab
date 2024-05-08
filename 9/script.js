function validate() {
    // Retrieve input values
    let userId = document.getElementById("user").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    // Regular expressions for validation
    let userIdRegex = /^[a-zA-Z0-9]{5,12}$/;//5-12 is the length
    let nameRegex = /^[a-zA-Z ]{15,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;//over 8 length
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!userIdRegex.test(userId)) {
        alert("User ID must be between 5 to 12 characters and can contain only alphanumeric characters.");
        return;
    }
    if (!nameRegex.test(name)) {
        alert("Name must contain only alphabets and should be at least 15 characters long.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be eight characters long, containing at least one uppercase letter, one special character, and alphanumeric characters.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return;
    }

    // If all validations pass, display success message
    alert("Form submitted successfully!");
}

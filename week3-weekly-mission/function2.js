document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("togglePassword").addEventListener("click", function() {
        var passwordInput = document.getElementById("inputpassword");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("confirmPassword").addEventListener("click", function() {
        var confirmInput = document.getElementById("inputconfirm");
        if (confirmInput.type === "password") {
            confirmInput.type = "text";
        } else {
            confirmInput.type = "password";
        }
    });
});

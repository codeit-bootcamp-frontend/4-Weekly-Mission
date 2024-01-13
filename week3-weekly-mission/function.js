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

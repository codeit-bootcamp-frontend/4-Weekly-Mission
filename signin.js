import { validateEmail, validatePassword, togglePasswordVisibility } from './validation.js';

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const togglePassword = document.getElementById("toggle-password");
  const eyeIcon = document.getElementById("eye-icon");

  emailInput.addEventListener("focusout", function() {
    const errorMessage = validateEmail(emailInput.value);
    emailError.textContent = errorMessage;
  });

  passwordInput.addEventListener("focusout", function() {
    const errorMessage = validatePassword(passwordInput.value);
    passwordError.textContent = errorMessage;
  });

  togglePassword.addEventListener("click", function() {
    togglePasswordVisibility(passwordInput, eyeIcon);
  });

  document.querySelector(".sign-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
      window.location.href = "/folder";
    } else {
      if (emailInput.value !== "test@codeit.com") {
        emailError.textContent = "이메일을 확인해 주세요.";
      }
      if (passwordInput.value !== "codeit101") {
        passwordError.textContent = "비밀번호를 확인해 주세요.";
      }
    }
  });
});

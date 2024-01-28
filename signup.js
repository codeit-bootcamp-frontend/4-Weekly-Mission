import { validateEmail, validatePassword, togglePasswordVisibility } from './validation.js';

function isEmailInUse(email) {
  return email === "test@codeit.com";
}

function validateConfirmPassword() {
  const password = document.getElementById("password-input").value;
  const confirmPassword = document.getElementById("confirm-password-input").value;
  return password === confirmPassword ? "" : "비밀번호가 일치하지 않아요.";
}

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordInput = document.getElementById("confirm-password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById("confirm-password-error");

  emailInput.addEventListener("focusout", function() {
    let errorMessage = validateEmail(emailInput.value);
    if (isEmailInUse(emailInput.value)) {
      errorMessage = "이미 사용 중인 이메일입니다.";
    }
    emailError.textContent = errorMessage;
  });

  passwordInput.addEventListener("focusout", function() {
    passwordError.textContent = validatePassword(passwordInput.value);
  });

  confirmPasswordInput.addEventListener("focusout", function() {
    confirmPasswordError.textContent = validateConfirmPassword();
  });

  document.querySelector(".sign-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (!emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
      window.location.href = "/folder";
    }
  });

  const togglePasswordButtons = document.querySelectorAll(".eye-button");
  togglePasswordButtons.forEach(button => {
    const input = button.previousElementSibling;
    const eyeIcon = button.querySelector('img');
    button.addEventListener("click", function() {
      togglePasswordVisibility(input, eyeIcon);
    });
  });
});
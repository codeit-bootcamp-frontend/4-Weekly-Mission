import { validateEmail, validatePassword, togglePasswordVisibility } from './validation.js';
import { saveAccessToken, redirectToFolderIfLoggedIn } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  redirectToFolderIfLoggedIn();

  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const signInForm = document.querySelector(".sign-form");
  const togglePasswordButton = document.getElementById("toggle-password");
  const eyeIcon = document.getElementById("eye-icon");

  emailInput.addEventListener("focusout", () => {
    const errorMessage = validateEmail(emailInput.value);
    emailError.textContent = errorMessage;
  });

  passwordInput.addEventListener("focusout", () => {
    const errorMessage = validatePassword(passwordInput.value);
    passwordError.textContent = errorMessage;
  });

  togglePasswordButton.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, eyeIcon);
  });

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        saveAccessToken(data.accessToken);
        window.location.href = "/folder";
      } else {
        emailError.textContent = "로그인에 실패했습니다.";
        passwordError.textContent = "";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      emailError.textContent = "로그인 과정에서 오류가 발생했습니다.";
      passwordError.textContent = "";
    });
  });
});

import { validateEmail, validatePassword, togglePasswordVisibility } from './validation.js';
import { saveAccessToken, redirectToFolderIfLoggedIn } from './auth.js';

const validateConfirmPassword = () => {
  const password = document.getElementById("password-input").value;
  const confirmPassword = document.getElementById("confirm-password-input").value;
  return password === confirmPassword ? "" : "비밀번호가 불일치";
}

document.addEventListener("DOMContentLoaded", () => {
  redirectToFolderIfLoggedIn();

  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordInput = document.getElementById("confirm-password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById("confirm-password-error");
  const signUpForm = document.querySelector(".sign-form");
  const togglePasswordButtons = document.querySelectorAll(".eye-button");

  emailInput.addEventListener("focusout", () => {
    const errorMessage = validateEmail(emailInput.value);
    emailError.textContent = errorMessage;
  });

  passwordInput.addEventListener("focusout", () => {
    const errorMessage = validatePassword(passwordInput.value);
    passwordError.textContent = errorMessage;
  });

  confirmPasswordInput.addEventListener("focusout", () => {
    confirmPasswordError.textContent = validateConfirmPassword();
  });

  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (validateEmail(emailInput.value) || validatePassword(passwordInput.value) || validateConfirmPassword()) {
      emailError.textContent = validateEmail(emailInput.value);
      passwordError.textContent = validatePassword(passwordInput.value);
      confirmPasswordError.textContent = validateConfirmPassword();
      return;
    }

    fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
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
        emailError.textContent = "회원가입에 실패했습니다.";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      emailError.textContent = "회원가입 과정에서 오류가 발생했습니다.";
      passwordError.textContent = "";
      confirmPasswordError.textContent = "";
    });
  });

  togglePasswordButtons.forEach(button => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      const eyeIcon = button.querySelector('img');
      togglePasswordVisibility(input, eyeIcon);
    });
  });
});

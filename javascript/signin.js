import { emailRegex, errorMessage, validation, showError, hideError } from "./module.js";

const emailInput = document.getElementById("signin-email-input");
const emailErrorMessage = document.querySelector(".signin-email-error");
const passwordInput = document.getElementById("signin-password-input");
const passwordErrorMessage = document.querySelector(".signin-password-error");
const loginBtn = document.querySelector(".login-btn");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");

function errorEmail() {
    const emailValue = emailInput.value;
    if (validation.isEmpty(emailValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.emptyEmail);
    } else if (!emailRegex.test(emailValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmailFormat);
    } else {
        hideError(emailErrorMessage, emailInput);
    }
}

function errorPassword() {
    const passwordValue = passwordInput.value;
    if (validation.isEmpty(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, errorMessage.emptyPassword);
    } else {
        hideError(passwordErrorMessage, passwordInput);
    }
}

function checkValidation() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    if (validation.isValidSignin(emailValue, passwordValue)) {
        location.href = "/folder";
    } else if (validation.isUnvalidEmail(emailValue, passwordValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmail);
    } else if (validation.isUnvalidPassowrd(emailValue, passwordValue)) {
        showError(passwordErrorMessage, passwordInput, errorMessage.unValidPassword);
    } else {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmail);
        showError(passwordErrorMessage, passwordInput, errorMessage.unValidPassword);
    }
}

function toggleShowPassword() {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    eyeOff.classList.toggle('none');
    eyeOn.classList.toggle('none');
}

function enterBtn(e) {
    if (e.key === "Enter") {
        checkValidation();
        e.preventDefault();
    }
}

emailInput.addEventListener("blur", errorEmail);
passwordInput.addEventListener("blur", errorPassword);
loginBtn.addEventListener("click", checkValidation);
window.addEventListener("keypress", enterBtn);
eyeOff.addEventListener("click", toggleShowPassword);
eyeOn.addEventListener("click", toggleShowPassword);
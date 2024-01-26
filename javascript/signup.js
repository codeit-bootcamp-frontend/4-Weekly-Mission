import { emailRegex, errorMessage, validation, showError, hideError, passwordRegex } from "./module.js";

const emailInput = document.getElementById("signup-email-input");
const emailErrorMessage = document.querySelector(".signup-email-error");
const passwordInput = document.getElementById("signup-password-input");
const passwordErrorMessage = document.querySelector(".signup-password-error");
const passwordCheckInput = document.getElementById("signup-password-check-input");
const passwordCheckErrorMessage = document.querySelector(".signup-password-check-error");
const loginBtn = document.querySelector(".signup-btn");
const eyeOff = document.querySelector(".show-password");
const eyeOn = document.querySelector(".hide-password");
const eyeOffCheck = document.querySelector(".show-password-check");
const eyeOnCheck = document.querySelector(".hide-password-check");


function errorEmail() {
    const emailValue = emailInput.value;
    if (validation.isEmpty(emailValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.emptyEmail);
    } else if (!emailRegex.test(emailValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmailFormat);
    } else if (validation.isAlreadyUse(emailValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.alreadyUseEamil);
    } else {
        hideError(emailErrorMessage, emailInput);
    }
}

function errorPassword() {
    const passwordValue = passwordInput.value;
    if (validation.isEmpty(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, errorMessage.emptyPassword);
    } else if (!passwordRegex.test(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, errorMessage.unValidPasswordFormat);
    } else {
        hideError(passwordErrorMessage, passwordInput);
    }
}

function checkPassword() {
    const passwordValue = passwordInput.value;
    const passwordcheckValue = passwordCheckInput.value;
    if (validation.isDifferentPassowrd(passwordValue, passwordcheckValue)) {
        showError(passwordCheckErrorMessage, passwordCheckInput, errorMessage.differPassword);
    } else {
        hideError(passwordCheckErrorMessage, passwordCheckInput);
    }
}

function checkValidation() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const passwordCheckValue = passwordCheckInput.value;
    if (validation.isValidSignup(emailValue, passwordValue, passwordCheckValue)) {
        location.href = "/folder";
    } else if (validation.isUnvalidSignupEmail(emailValue, passwordValue, passwordCheckValue)) {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmail);
    } else if (validation.isUnvalidSignupPassword(emailValue, passwordValue, passwordCheckValue)) {
        showError(passwordErrorMessage, passwordInput, errorMessage.unValidPassword);
        showError(passwordCheckErrorMessage, passwordCheckInput, errorMessage.unValidPassword);
    } else {
        showError(emailErrorMessage, emailInput, errorMessage.unValidEmail);
        showError(passwordErrorMessage, passwordInput, errorMessage.unValidPassword);
        showError(passwordCheckErrorMessage, passwordCheckInput, errorMessage.unValidPassword);
    }
}

function toggleShowPassword() {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    eyeOff.classList.toggle('none');
    eyeOn.classList.toggle('none');
}

function toggleShowPasswordCheck() {
    passwordCheckInput.type = passwordCheckInput.type === 'text' ? 'password' : 'text';
    eyeOffCheck.classList.toggle('none');
    eyeOnCheck.classList.toggle('none');
}

function enterBtn(e) {
    if (e.key === "Enter") {
        checkValidation();
        e.preventDefault();
    }
}



emailInput.addEventListener("blur", errorEmail);
passwordInput.addEventListener("blur", errorPassword);
passwordCheckInput.addEventListener("blur", checkPassword);
loginBtn.addEventListener("click", checkValidation);
window.addEventListener("keypress", enterBtn);
eyeOff.addEventListener("click", toggleShowPassword);
eyeOn.addEventListener("click", toggleShowPassword);
eyeOffCheck.addEventListener("click", toggleShowPasswordCheck);
eyeOnCheck.addEventListener("click", toggleShowPasswordCheck);


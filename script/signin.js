import {EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE, USERS} from './constant.js'
import { getElementById} from './dom/domhelper.js';
import { isEmptyString, isValidEmail, showError, hideError, showPassword, hidePassword } from './functions/sign.js';
import { goToFolderhtml } from './temporary.js';

// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Button
const loginButton = getElementById('login-button');
const eyeButton = getElementById('eye-button');

emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim();
    if(isEmptyString(emailValue)){showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isEmpty); return;}
    if(!isValidEmail(emailValue)){showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isNotRightFormat); return;}
    hideError(emailInput, emailErrorMessage);
});

passwordInput.addEventListener('focusout', function () {
    const passwordValue = passwordInput.value.trim();
    if(isEmptyString(passwordValue)) {showError(passwordInput,passwordErrorMessage,PASSWORD_ERROR_MESSAGE.isEmpty); return;}
    hideError(passwordInput, passwordErrorMessage);
});

loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (USERS[0].id === emailValue && USERS[0].password === passwordValue) { window.location.href = goToFolderhtml; return;}
    showError(emailInput,emailErrorMessage,EMAIL_ERROR_MESSAGE.haveToCheck); showError(passwordInput,passwordErrorMessage,PASSWORD_ERROR_MESSAGE.haveToCheck);
});

eyeButton.addEventListener('click', function () {
    if (passwordInput.type === 'text') {showPassword(passwordInput, eyeButton); return;}
    hidePassword(passwordInput,eyeButton);
});
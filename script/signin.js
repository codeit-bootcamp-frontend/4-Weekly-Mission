import {EMAIL_ERROR_MESSAGE, EMAIL_REGEX, PASSWORD_ERROR_MESSAGE, USERS, VISIABLE_STATE} from './constant.js'
import { getElementById , addClass, removeClass} from './dom/domhelper.js';
import { isEmptyString, isValidEmail, isValidPassword, showError, hideError } from './functions/signFunction.js';
import { goToFolderhtml } from './temporary.js';


// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Button
const signInButton = getElementById('login-button');
const watchPassword = getElementById('eye-button');

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

signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (USERS[0].id === emailValue && USERS[0].password === passwordValue) { window.location.href = goToFolderhtml; return;}
    showError(emailInput,emailErrorMessage,EMAIL_ERROR_MESSAGE.haveToCheck); showError(passwordInput,passwordErrorMessage,PASSWORD_ERROR_MESSAGE.haveToCheck);
});

watchPassword.addEventListener('click', function () {
    if (passwordInput.type === 'text' ? true : false) {
        watchPassword.firstElementChild.src = VISIABLE_STATE.invisiable;
        passwordInput.type = 'password';
    } else {
        watchPassword.firstElementChild.src = VISIABLE_STATE.visiable;
        passwordInput.type = 'text';
    }
});


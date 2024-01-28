import {EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE, USERS, VISIABLE_STATE} from './constant.js'
import { getElementById} from './dom/domhelper.js';
import { isEmptyString, isValidEmail, showError, hideError } from './functions/signFunction.js';
import { goToFolderhtml } from './temporary.js';

// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Password Confirm Error
const passwordConfirmInput = getElementById('password_confirm');
const passwordConfirmErrorMessage = getElementById('passwordConfirmErrorMessage');

// About Button
const mainButton = getElementById('sign-in-button');
const eyeButtonPassword = getElementById('eye-button-password');
const eyeButtonForConfirm = getElementById('eye-button-password-confirm');

emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim();
    if(emailValue === 'test@codeit.com'){showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isUsing); return;}
    hideError(emailInput, emailErrorMessage);
});

mainButton.addEventListener('click', function (event) {
    event.preventDefault();
    const passwordValue = passwordInput.value.trim();
    const passwordConfirmValue = passwordConfirmInput.value.trim();
    if(passwordValue !== passwordConfirmValue) {makeVisiable(passwordMatchErrorMessage); return;}
    window.location.href = goToFolderhtml;
});

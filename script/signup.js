import {EMAIL_REGEX, USERS, VISIABLE_STATE} from './constant.js'
import { isEmptyString, isVisiable, makeInvisiable, makeVisiable, isValidEmail, isValidPassword } from './functions/signFunction.js';


// ERROR_MESSAGE for email
const emailErrorMessage = document.getElementById('emailErrorMessage');
const emailFormatErrorMessage = document.getElementById('emailFormatErroMessage');
const emailCheckErrorMessage = document.getElementById('emailCheckErrorMessage');

// ERROR_MESSAGE for password
const passwordErrorMessage = document.getElementById('passwordErrorMessage');
const passwordCheckMessage = document.getElementById('passwordCheckMessage');
const passwordFormatErrorMessage = document.getElementById('passwordFormatMessage');
const passwordMatchErrorMessage = document.getElementById('passwordMatchErrorMessage');

//INPUT section
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password_confirm');

//Button section
const signInButton = document.getElementById('login-button');
const watchPassword = document.getElementById('eye-button');



emailInput.addEventListener('focusout', function(){
    const emailValue = emailInput.value.trim(); 
    if(!isEmptyString(emailValue)) {makeInvisiable(emailErrorMessage);return;}
    makeVisiable(emailErrorMessage);
});

passwordInput.addEventListener('focusout', function () {
    const passwordValue = passwordInput.value.trim();
    if(!isEmptyString(passwordValue)) {makeInvisiable(passwordErrorMessage);return;} 
    makeVisiable(passwordErrorMessage);
});

emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim();
    if (!isEmptyString(emailValue) && isValidEmail(emailValue)) {
        makeInvisiable(emailFormatErrorMessage); return;} 
    if (isEmptyString(emailValue)) {makeInvisiable(emailFormatErrorMessage); return;}
    makeVisiable(emailFormatErrorMessage);
});

passwordInput.addEventListener('focusout', function () {
    const passwordValue = passwordInput.value.trim();
    if(!isEmptyString(passwordValue) && isValidPassword(passwordValue)) {
        makeInvisiable(passwordFormatErrorMessage);return;} 
    makeVisiable(passwordFormatErrorMessage);
});

signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (USERS[0].id === emailValue && USERS[0].password === passwordValue) {
        window.location.href = goToFolderhtml;
    }
    makeVisiable(emailCheckErrorMessage);
    makeVisiable(passwordCheckMessage);
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

signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    const passwordValue = passwordInput.value.trim();
    const passwordConfirmValue = passwordConfirmInput.value.trim();
    if(passwordValue !== passwordConfirmValue) {makeVisiable(passwordMatchErrorMessage); return;}
    window.location.href = goToFolderhtml;
});

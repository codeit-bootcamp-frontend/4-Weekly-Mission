/*********************
       Import
*********************/

import {
  user,
  isEmpty,
  isEmailValid,
  isPasswordValid,
  showErrorMessage,
  hideErorrMessage,
  changePlaceholderFocusIn,
  changePlaceholderFocusOut,
  togglePasswordVisibility,
} from "../scripts/utils.js";

/*********************
      UI Constant
*********************/

const signInForm = document.querySelector('.signin-form');

const inputEmail = document.querySelector('#signin-email');
const inputPassword = document.querySelector('#signin-password');

const errorMessageEmail = document.querySelector('.errorMessage-email');
const errorMessagePassword = document.querySelector('.errorMessage-password');

/*********************
       Function
*********************/

function verifyAccount(email, password) { 
  if ( email !== user.email ) {
    return false
  }

  if ( password !== user.password) {
    return false
  }

  return true;
};

/*********************
    Event Function
*********************/

function emailError() {
  if (isEmpty(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 입력해 주세요.');
    inputEmail.classList.add('red-border');
    return;
  } 

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '올바른 이메일 주소가 아닙니다.')
    inputEmail.classList.add('red-border');
    return;
  }
};

function passwordError() {
  if (isEmpty(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호를 입력해 주세요.')
    inputPassword.classList.add('red-border')
  };
};

function deleteError(e) {
  if (e.target === inputEmail) {
    hideErorrMessage(errorMessageEmail);
    inputEmail.classList.remove('red-border');
  };

  if (e.target === inputPassword) {
    hideErorrMessage(errorMessagePassword);
    inputPassword.classList.remove('red-border');
  };
};

function login(e) {
  e.preventDefault();

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (!verifyAccount(inputEmail.value, inputPassword.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };

  return location.href = '../folder/index.html';
};

/*********************
      EventHandler
*********************/

signInForm.addEventListener('focusin', changePlaceholderFocusIn);
signInForm.addEventListener('focusout', changePlaceholderFocusOut);
signInForm.addEventListener('submit', login);
signInForm.addEventListener('focusin', deleteError);
signInForm.addEventListener('click', togglePasswordVisibility)

inputEmail.addEventListener('focusout', emailError);

inputPassword.addEventListener('focusout', passwordError);